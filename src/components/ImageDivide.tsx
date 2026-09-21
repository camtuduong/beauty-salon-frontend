import Image from "next/image";

type Props = {
  src: string;
};
export const ImageDivide = ({ src }: Props) => {
  return (
    <div className="relative h-40 w-full">
      <Image
        src={src}
        alt="Divider image"
        fill={true}
        className="object-cover"
      />
    </div>
  );
};
