import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center pt-16 pb-4">
      <h1 className="font-handwritten text-[96px] tracking-[-0.96px] text-black text-center leading-none mb-8">
        UX Designer
      </h1>

      <div className="relative w-[288px] h-[288px] rounded-full overflow-hidden shadow-md">
        <Image
          src="/profile.jpg"
          alt="Joan Miguel"
          fill
          className="object-cover"
          priority
        />
      </div>

      <p className="font-mono text-[20px] tracking-[4px] text-black text-center mt-6 mb-4">
        Joan Miguel
      </p>
    </section>
  );
}
