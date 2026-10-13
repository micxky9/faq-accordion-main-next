'use client';

import { useState} from "react";
import Image from "next/image";

type AccordionProps = {
    question: string;
    answer: string;
};

const Accordion = ({ question, answer }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="transition-all duration-300 ease-in-out flex w-full items-center justify-between space-x-2 p-2 rounded-lg cursor-pointer text-left"
            >
                <span className="text-purple-950 font-bold text-[0.93em]">{question}</span>
                <span className="text-2xl font-bold">
                    {isOpen ? (
                        <Image src="/assets/images/icon-minus.svg" alt="" width={23} height={23} />
                    ) : (
                        <Image src="/assets/images/icon-plus.svg" alt="" width={23} height={23} />
                    )}
                </span>
            </button>
            {isOpen && (
                <div className="text-purple-600 w-95">
                    <p className="text-[0.9em]">
                        {answer}
                    </p>
                </div>
            )}
        </>
     );
}

export default Accordion;