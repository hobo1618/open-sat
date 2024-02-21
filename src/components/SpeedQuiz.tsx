import { useState } from "react";
import { proxy, useSnapshot } from "valtio";
import { useInterval } from "../hooks/useInterval"

import { Button } from "./ui/button"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { LightningBoltIcon, ResetIcon } from "@radix-ui/react-icons";

interface Question {
    question: string;
    options: string[];
    answer: 0 | 1;
}

interface Metadata {
    title: string;
    id: string;
    description: string;
    prompt: string;
    date: string;
    tags: string[];
}

interface QuizStore {
    count: number;
    state: "fresh" | "inProgress" | "completed";
    idx: number;
    score: number;
    attempts: number;
}

const store = proxy<QuizStore>({
    count: 60,
    state: "fresh",
    idx: 0,
    score: 0,
    attempts: 0,
})

export default function SpeedQuiz({
    metadata,
    questions,
}: {
    metadata: Metadata;
    questions: Question[];
}) {
    console.log(metadata, questions)

    const [open, setOpen] = useState(false);

    useInterval(() => {
        if (store.state === "inProgress") {
            if (store.count === 0) return store.state = "completed";
            --store.count;
        }
    },
        store.state === "inProgress" ? 1000 : null
    )

    const snap = useSnapshot(store);

    const handleStart = () => {
        store.state = "inProgress";
    }

    const handleSubmit = (answer: 0 | 1) => {
        questions[snap.idx].answer === answer && ++store.score + 1;
        ++store.attempts;
        if (snap.idx === questions.length - 1) {
            store.state = "completed";
            return
        };
        ++store.idx;
    }

    const handleReset = () => {
        store.idx = 0;
        store.score = 0;
        store.state = "fresh";
        store.count = 60;
    }

    const handleOpenChange = (open: boolean) => {
        handleReset();
        setOpen(open)
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button>
                    <LightningBoltIcon className="mr-2" />
                    Speed Drill {metadata.id}
                    <LightningBoltIcon className="ml-2" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                {snap.state === "fresh" && (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-4xl">Speed run {metadata.id}</DialogTitle>
                            <DialogDescription className="h-full">
                                {metadata.prompt}
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button onClick={handleStart}>Start</Button>
                        </DialogFooter>
                    </>
                )}
                {snap.state === "inProgress" && (
                    <div className="grid grid-cols-2 gap-4 max-w-[500px]">
                        <p className="col-span-2 text-2xl text-center">
                            {snap.count}
                        </p>
                        <div className="col-span-2 text-4xl text-center">
                            {questions[snap.idx].question}
                        </div>
                        <Button
                            className="col-span-1 text-4xl p-8"
                            variant="outline"
                            onClick={() => handleSubmit(0)}
                        >
                            {questions[snap.idx].options[0]}
                        </Button>
                        <Button
                            className="col-span-1 text-4xl p-8"
                            variant="outline"
                            onClick={() => handleSubmit(1)}
                        >
                            {questions[snap.idx].options[1]}
                        </Button>
                        <span className="col-span-2 justify-self-end">
                            <Button variant="outline" onClick={handleReset}>
                                <ResetIcon className="mr-2" />
                                Reset
                            </Button>
                        </span>
                    </div>
                )}
                {snap.state === "completed" && (
                    <div className="grid grid-cols-2 gap-4 max-w-[500px]">
                        <p className="col-span-2 text-2xl text-center">
                            You scored
                        </p>
                        <div className="col-span-2 text-7xl text-center">
                            {snap.score}
                        </div>
                        <p className="col-span-2 text-2xl text-center">
                            out of {snap.attempts} attempts.
                        </p>
                        <span className="col-span-2 justify-self-end">
                            <Button variant="outline" onClick={handleReset}>
                                <ResetIcon className="mr-2" />
                                Try again
                            </Button>
                        </span>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}

