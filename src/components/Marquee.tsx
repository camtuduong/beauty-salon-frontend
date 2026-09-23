import Image from "next/image";

const STYLES = {
  container:
    "group bg-salon-primary/40 relative h-full w-full overflow-hidden py-8",
  marquee:
    "animate-marquee group-hover:paused flex w-max motion-reduce:animate-none",
  logoContainer: "flex shrink-0 gap-4 pr-4",
  logo: "relative h-37.5 w-73 shrink-0",
  logoImage: "rounded-[20px] object-cover",
};
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
    <div className={STYLES.container}>
      <div className={STYLES.marquee}>
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className={STYLES.logoContainer}
          >
            {logos.map((logo, index) => (
              <div key={index} className={STYLES.logo}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="292px"
                  className={STYLES.logoImage}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
