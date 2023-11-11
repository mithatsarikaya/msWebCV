"use client";
import { useSelector } from "react-redux";
import { getTheme } from "@/store/features/thememode/thememodeSlice";

const Panel = ({
  children,
  styleFromParent,
}: {
  children: React.ReactNode;
  styleFromParent: string;
}) => {
  let theme = useSelector(getTheme);

  return (
    <div
      className={
        theme == "dark" ? `${styleFromParent} darkMode` : styleFromParent
      }
    >
      {children}
    </div>
  );
};

export default Panel;
