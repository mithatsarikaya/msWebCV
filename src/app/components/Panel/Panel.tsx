import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Panel = ({
  children,
  styleFromParent,
}: {
  children: React.ReactNode;
  styleFromParent: string;
}) => {
  const theme = useSelector((state: RootState) => state.theme.value);

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
