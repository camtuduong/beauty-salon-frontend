import Image from "next/image";

export const Marquee = () => {
  const logos = [
    {
      src: "/Image.png",
      alt: "Company logo 1",
    },
    {
      src: "/Image.png",
      alt: "Company logo 2",
    },
    {
      src: "/Image.png",
      alt: "Company logo 3",
    },
    {
      src: "/Image.png",
      alt: "Company logo 4",
    },
    {
      src: "/Image.png",
      alt: "Company logo 5",
    },
  ];

  return (
    <div className="group relative h-full w-full overflow-hidden bg-[#17313E]/40 py-8">
      <div className="animate-marquee group-hover:paused flex w-max motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 gap-4 pr-4"
          >
            {logos.map((logo, index) => (
              <div key={index} className="relative h-37.5 w-73 shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="292px"
                  className="rounded-[20px] object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
