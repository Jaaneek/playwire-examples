interface IProps {
  type: string;
}

export const AdUnit = (props: IProps) => {
  const { type } = props;

  let useName = "responsive-top-square";
  if (type === "leaderboard-top") useName = "desktop-top-leaderboard";
  else if (type === "leaderboard-bottom")
    useName = "desktop-bottom-leaderboard";
  else if (type === "mobile-leaderboard") useName = "mobile-leaderboard";
  else if (type === "square-one") useName = "responsive-top-square";
  else if (type === "square-two") useName = "responsive-bottom-square";
  else if (type === "skyscraper-one") useName = "responsive-top-skyscraper";
  else if (type === "skyscraper-two") useName = "responsive-bottom-skyscraper";
  else if (useName.includes("leaderboard"))
    return (
      <div className="w-64 sm:w-80 md:w-92 lg:w-128 xl:w-164 mx-auto rounded-lg bg-gray-700 h-16" />
    );
  else if (useName.includes("square"))
    return <div className="w-64 mx-auto rounded-lg bg-gray-700 h-48" />;
  else if (useName.includes("skyscraper"))
    return <div className="w-64 mx-auto rounded-lg bg-gray-700 h-128" />;
  return <></>;
};
