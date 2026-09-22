import { Comma } from "@/src/components/Icons/Comma";
import { Tab } from "@/src/components/Tab";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel";

export const FeedBackSection = () => {
  const feedbacks = [
    {
      testimonial:
        "Legally Always has been an invaluable partner in navigating the complexities of business law.",
      avatarSrc: "path/to/avatar.jpg",
      avatarFallback: "LA",
      userName: "Legal Always",
      starRating: 5,
    },
    {
      testimonial:
        "Legally Always has been an invaluable partner in navigating the complexities of business law.",
      avatarSrc: "path/to/avatar.jpg",
      avatarFallback: "LA",
      userName: "Legal Always",
      starRating: 4,
    },
    {
      testimonial:
        "Legally Always has been an invaluable partner in navigating the complexities of business law.",
      avatarSrc: "path/to/avatar.jpg",
      avatarFallback: "LA",
      userName: "Legal Always",
      starRating: 4,
    },
    {
      testimonial:
        "Legally Always has been an invaluable partner in navigating the complexities of business law.",
      avatarSrc: "path/to/avatar.jpg",
      avatarFallback: "LA",
      userName: "Legal Always",
      starRating: 3,
    },
    {
      testimonial:
        "Legally Always has been an invaluable partner in navigating the complexities of business law.",
      avatarSrc: "path/to/avatar.jpg",
      avatarFallback: "LA",
      userName: "Legal Always",
      starRating: 5,
    },
    {
      testimonial:
        "Legally Always has been an invaluable partner in navigating the complexities of business law.",
      avatarSrc: "path/to/avatar.jpg",
      avatarFallback: "LA",
      userName: "Legal Always",
      starRating: 5,
    },
  ];
  return (
    <section id="feedback" className="mx-4 my-20 md:ml-45">
      <div className="flex w-full flex-col items-start gap-2.75 md:w-1/2">
        <Comma className="text-salon-secondary" />
        <h1 className="font-playfair text-salon-heading text-5xl font-semibold">
          WHY CLIENTS TRUST US
        </h1>
        <h3 className="text-salon-copy text-xl font-semibold">
          We are committed to gentle, safe beauty care with exceptional
          results.Here’s what our clients say about us.
        </h3>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="my-13 w-full"
      >
        <CarouselContent className="ml-0 md:-ml-4">
          {feedbacks.map((feedback, index) => (
            <CarouselItem
              key={index}
              className="flex basis-full justify-center pl-0 md:basis-104 md:justify-start md:pl-4"
            >
              <Tab
                key={index}
                testimonial={feedback.testimonial}
                avatarSrc={feedback.avatarSrc}
                avatarFallback={feedback.avatarFallback}
                userName={feedback.userName}
                starRating={feedback.starRating}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
