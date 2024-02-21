const questions = [
    {
        options: ["3", "4"],
        answer: 0,
    },
    {
        options: ["5", "6"],
        answer: 1,
    }
]


export default function SpeedQuiz() {
    return (
        <div>
            {questions.map(q => (
                <div className="flex flex-col gap-8">
                    <p className="text-destructive">{q.options[0]}</p>
                    <p>{q.options[1]}</p>
                </div>
            ))}
        </div>
    )
}
