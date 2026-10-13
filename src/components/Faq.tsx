import Accordion from "./Accordion";
import Logo from "./Logo";
import { faqs } from "../app/libs/faq";


const Faq = () => {
    return (
        <main className="flex flex-col min-h-100 max-w-120 rounded-lg bg-white mt-[-230] p-6 space-y-7 t">
            <Logo/>
            {faqs.map((faq) => (
                <Accordion key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
        </main>
     );
}

export default Faq;