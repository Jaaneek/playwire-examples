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
  return <div id={useName} className="pw pwUnit" />;
};
