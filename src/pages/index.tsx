import { Button } from "../components/ui/button";
import { CaretRightIcon } from '@radix-ui/react-icons';

export default function Home(): JSX.Element {
    return (
        <div className="flex flex-col h-screen items-center relative w-full gap-16 p-16">
            <a
                className='text-[var(--ifm-color-primary)] text-center font-bold text-2xl leading-6'
                href="/docs/getting-started">
                Open
                <br />
                SAT(R)
            </a>
            <div className="flex flex-row justify-center gap-48 items-center w-full h-full" >
                <a href="/docs/getting-started">
                    <img src='/img/smiley.png' />
                </a>
                <div>
                    <h2
                        className="bg-gradient-to-r from-[var(--ifm-color-primary)] to-[var(--ifm-color-primary-darkest)] text-transparent bg-clip-text font-bold text-[4rem] tracking-[-0.5rem] leading-[0.8] pr-2" >
                        free
                        <br />
                        open-source
                        <br />
                        test prep
                        <br />
                        for everyone
                        <br />
                    </h2>

                    <div className="flex items-center justify-end w-full pt-5" >
                        <Button variant='outline' asChild>
                            <a
                                href="/docs/getting-started"
                            >
                                Get Started
                                <CaretRightIcon className='ml-1 w-5 h-5' />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
}
