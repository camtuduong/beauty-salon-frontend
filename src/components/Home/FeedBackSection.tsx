import { Comma } from "@/src/components/Icons/Comma";
import { Tab } from "@/src/components/Tab";

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
  ];
  return (
    <section className="my-20 ml-45 w-full">
      <div className="flex w-1/2 flex-col items-start gap-2.75">
        <Comma className="text-salon-secondary" />
        <h1 className="font-playfair text-salon-heading text-5xl font-semibold">
          WHY CLIENTS TRUST US
        </h1>
        <h3 className="text-salon-copy text-xl font-semibold">
          We are committed to gentle, safe beauty care with exceptional
          results.Here’s what our clients say about us.
        </h3>
      </div>

      <div className="my-13 flex w-full gap-8">
        {feedbacks.map((feedback, index) => (
          <Tab
            key={index}
            testimonial={feedback.testimonial}
            avatarSrc={feedback.avatarSrc}
            avatarFallback={feedback.avatarFallback}
            userName={feedback.userName}
            starRating={feedback.starRating}
          />
        ))}
      </div>
    </section>
  );
};
