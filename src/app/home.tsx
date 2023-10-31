import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full justify-between py-[2%] px-[10%]">
      <div className="flex flex-col w-full lg:w-3/5">
        <div className="flex flex-col text-secondary text-4xl lg:text-8xl border-tertiary border-t-4 lg:border-t-0 border-b-4 pt-8 lg:pt-0 pb-8 w-full text-center lg:text-left">
          <h1>RICHIK</h1>
          <h1>CHANDA</h1>
        </div>
        <h1 className="text-tertiary font-semibold text-xl lg:w-4/5 mt-8">
          Hi, I&apos;m Richik, an engineer from Kolkata, India. I love to build
          things that make a difference.
        </h1>
        <h1 className="text-tertiary italic text-xl lg:w-4/5 mt-4">
          I am passionate about building products that are scalable, secure, and
          user-friendly, while trying to fill the void inside my knowledge
          bucket by learning new things with each passing day.
        </h1>
        <h1 className="text-tertiary text-xl lg:w-4/5 mt-4">
          I am driven by the motto to{" "}
          <span className="font-bold underline text-secondary">
            build things that matter.
          </span>
        </h1>
      </div>

      <div className="relative w-full md:w-3/5 lg:w-1/3 pb-4 lg:pb-0 mx-auto lg:mx-0">
        <Image
          alt="My image"
          src="/me.jpg"
          layout="intrinsic"
          className="rounded-full"
          width={4011} // Width of the image in pixels
          height={3712} // Height of the image in pixels
        />
      </div>
    </div>
  );
}
