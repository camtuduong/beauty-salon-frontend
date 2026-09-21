import { TitleSection } from "@/src/components/TitleSection";

export const ContactSection = () => {
  return (
    <section className="mx-30 mt-15.25 flex flex-col gap-5">
      <TitleSection
        title="CONTACT US"
        subtitle="Get In Touch"
        description="We’re here to help you book appointments, ask questions, or discover the best treatments for your beauty needs."
      />
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};
