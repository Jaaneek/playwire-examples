import { AdUnit } from "./AdUnit";

interface IProps {
  position?: "left" | "right";
  className?: string;
}

export const AdvertisementSticky = (props: IProps) => {
  const { position, className } = props;

  let useCSS = className || "";
  if (position === "left") useCSS = "left-4";
  else if (position === "right") useCSS = "right-4";

  return (
    <div className={`absolute top-6 ${useCSS} hidden ads:block`}>
      <AdUnit type={`skyscraper-${position === "left" ? "one" : "two"}`} />
    </div>
  );
};
