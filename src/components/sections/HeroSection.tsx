import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center pt-8 pb-4 md:pt-16">
      <h1 className="font-handwritten text-[56px] md:text-[96px] tracking-[-0.96px] text-black text-center leading-none mb-8">
        UX Designer
      </h1>

      <div className="relative w-[200px] h-[200px] md:w-[288px] md:h-[288px] rounded-full overflow-hidden shadow-md">
        <Image
          src="/profile.jpg"
          alt="Joan Miguel"
          fill
          className="object-cover"
          priority
        />
      </div>

      <p className="font-handwritten text-[24px] md:text-[32px] tracking-[4px] text-black text-center mt-6 mb-4">
        Joan Miguel
      </p>
    </section>
  );
}
