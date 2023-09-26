import Image from "next/image";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col-reverse md:flex-row w-screen h-screen bg-[#000000] text-white items-center justify-evenly border-none p-4"
    >
      <div className="flex flex-col justify-center space-y-4 w-full md:w-1/3 text-lg sm:text-xl md:text-2xl text-justify md:text-right px-8 md:px-0">
        <h1>
          Hi, I&apos;m Richik, an engineer from Kolkata, India. I love to build things that make a difference.
        </h1>
        <h1 className="italic">
          I am passionate about building products that are scalable, secure, and user-friendly, while trying to fill the void inside my knowledge bucket by learning new things every day.
        </h1>
      </div>
      <div className="relative w-full sm:w-3/4 md:w-3/5 lg:w-2/5 h-2/5 md:h-1/2 lg:h-3/5 mt-4 md:mt-0">
        <Image src={"/me2.jpg"} fill alt="Me 2" className="rounded-md" />
      </div>
    </div>
  );
}
