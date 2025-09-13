import { useSpacemanTheme } from "@space-man/react-theme-animation";
import { Sun, Moon } from "phosphor-react"; // ⬅️ import icons

export default function ThemeToggleButton() {
  const { theme, switchTheme } = useSpacemanTheme();

  return (
    <button
      onClick={() => switchTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-2 rounded-md  flex items-center gap-2"
    >
      {theme === "dark" ? (
        <>
          <Sun size={20} weight="bold" /> 
        </>
      ) : (
        <>
          <Moon size={20} weight="bold" /> 
        </>
      )}
    </button>
  );
}
