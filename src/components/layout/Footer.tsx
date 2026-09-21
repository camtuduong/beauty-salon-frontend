export const Footer = () => {
  const lists = [
    {
      title: "Services",
      items: ["Haircut", "Facial", "Manicure", "Pedicure"],
    },
    {
      title: "Company",
      items: ["Our Story", "Team", "Careers", "Contact"],
    },
    {
      title: "Support",
      items: ["FAQ", "Help Center", "Privacy Policy", "Terms of Service"],
    },
    {
      title: "Links",
      items: ["Facebook", "Instagram", "Twitter"],
    },
  ];
  return (
    <footer>
      <div className="bg-salon-secondary flex items-start justify-start gap-10 text-white">
        <div className="flex shrink-0 flex-col gap-3.75 px-5">
          <h1 className="font-playfair x text-[48px] font-semibold">
            Natural Touch Beauty Salon
          </h1>
          <h3 className="text-[16px] font-semibold">
            Soft, elegant beauty care crafted for your natural glow.
          </h3>
          <p>Dubai, UAE.</p>
        </div>
        <div className="flex w-full flex-1 justify-around py-5">
          {lists.map((list) => (
            <div key={list.title} className="flex flex-col gap-2.5">
              <h3 className="text-xl font-semibold">{list.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {list.items.map((item) => (
                  <li className="text-[14px]" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between px-6 py-7">
        <span>
          &copy; {new Date().getFullYear()} Natural Touch Beauty Salon. All
          rights reserved.
        </span>
        <span>Designed with ❤︎ by Natural Touch Beauty Salon.</span>
      </div>
    </footer>
  );
};
