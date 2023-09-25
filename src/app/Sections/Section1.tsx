import { Fascinate_Inline } from "next/font/google";
import Image from "next/image";

const fascinateInline = Fascinate_Inline({ weight: "400", subsets: ["latin"] });

export default function Section1() {
  return (
    <div className="relative w-screen h-screen bg-[#FBFEF9] text-black">
      <Image src="/scribbles.png" alt="heading" fill />

      <div className="flex flex-col items-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-center text-6xl">
          <h1 className={`${fascinateInline.className} text-[#BF1363]`}>
            Build what matters,
          </h1>
          <h1 className="mt-4 italic text-right bold">One block at a time.</h1>
        </div>

        <div className="flex flex-col justify-start items-center text-2xl mt-16 max-h-96 overflow-auto gap-2">
          <h1>
            Hey, I&apos;m <span className="italic underline underline-offset-2 decoration-wavy">Richik</span>.
          </h1>
          <h1>I try to turn dreams into reality, with code.</h1>
        </div>
      </div>
    </div>
  );
}
