import Image from "next/image";

const Logo = () => {
    return (
        <div className="flex text-3xl font-bold space-x-4">
            <Image src="/assets/images/icon-star.svg" alt="Logo"
             width={30}
            height={30} />
            <h1 className="text-4xl font-bold text-purple-950">FAQs</h1>
        </div>
     );
}

export default Logo;