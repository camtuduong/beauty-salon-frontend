import { PhoneIcon } from "@/src/components/Icons/PhoneIcon";
import { MapPinIcon } from "@/src/components/Icons/MapPinIcon";
import { TitleSection } from "@/src/components/TitleSection";
import { Button } from "@/src/components/Button";
import { useForm, UseFormRegister } from "react-hook-form";
import { contactSchema } from "@/src/lib/contactSchema";
import type { ContactFormData } from "@/src/lib/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormInputs } from "@/src/lib/types";

const STYLES = {
  section: "mx-30 mt-15.25 flex flex-col gap-5",
  form: "border-salon-secondary flex w-1/2 flex-col gap-2 border-r-2 pr-6",
  cardContainer: "flex flex-col gap-6.5",
  cardInfo:
    "border-salon-primary/40 flex max-w-[320px] flex-col gap-3 rounded-lg border bg-white p-4 shadow-xl",
};

export const ContactSection = () => {
  const infos = [
    {
      icon: <PhoneIcon />,
      info: "+1 (234) 567-8901",
      title: "Call Us",
      description:
        "Reach out to us for any inquiries or to book an appointment.",
    },
    {
      icon: <MapPinIcon />,
      info: "123 Main Street, City, Country",
      title: "Visit Us",
      description:
        "Reach out to us for any inquiries or to book an appointment.",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
  });
  const onSubmit = () => {};
  return (
    <section className={STYLES.section}>
      <TitleSection
        title="CONTACT US"
        subtitle="Get In Touch"
        description="We’re here to help you book appointments, ask questions, or discover the best treatments for your beauty needs."
      />
      <div className="my-12 flex justify-around">
        <form className={STYLES.form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className="mb-4 text-[24px] leading-[150%] font-semibold">
            Contact Form
          </h2>
          <InputField
            label="Your Name"
            id="name"
            register={register}
            error={errors.name?.message}
            placeholder="Your Name"
          />
          <InputField
            label="Phone Number"
            id="phone"
            register={register}
            error={errors.phone?.message}
            placeholder="+1 (234) 567-8901"
          />
          <InputField
            label="Email"
            id="email"
            register={register}
            error={errors.email?.message}
            placeholder="you@example.com"
          />

          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register("message")}
              placeholder="Type your message here"
              className="border-salon-secondary bg-salon-primary/40 focus:ring-salon-secondary rounded p-2 font-bold text-white focus:ring-2 focus:outline-none"
              rows={4}
              maxLength={500}
            />
            {errors.message?.message && (
              <p className="text-sm text-red-500">{errors.message?.message}</p>
            )}
          </div>

          <Button className="self-end" type="submit">
            Send to Us
          </Button>
        </form>
        <div className={STYLES.cardContainer}>
          {infos.map((info, index) => (
            <CardInfo
              key={index}
              icon={info.icon}
              info={info.info}
              title={info.title}
              description={info.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type CardInfoProps = {
  icon: React.ReactNode;
  info: string;
  title: string;
  description: string;
};
function CardInfo({ icon, info, title, description }: CardInfoProps) {
  return (
    <div className={STYLES.cardInfo}>
      <div className="flex items-center gap-3">
        <div className="bg-salon-highlight/16 rounded-full p-1.5">{icon}</div>
        <p className="text-[16px] leading-[150%] font-light">{info}</p>
      </div>
      <h3 className="text-[18px] leading-[150%] font-medium">{title}</h3>
      <p className="text-[16px] leading-[150%] font-light">{description}</p>
    </div>
  );
}

function InputField({
  label,
  id,
  register,
  error,
  placeholder,
}: {
  label: string;
  id: keyof ContactFormInputs;
  register: UseFormRegister<ContactFormInputs>;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...register(id)}
        placeholder={placeholder}
        className="bg-salon-primary/40 focus:ring-salon-secondary rounded p-2 font-bold text-white focus:ring-2 focus:outline-none"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
