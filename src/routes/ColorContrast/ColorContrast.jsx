import { TextChecker } from "../../components/colorContrast/TextChecker";
import { useColorContrast } from "contexts/colorContrastContext";
import style from "./ColorContrast.module.css";
import { BackgroundChecker } from "../../components/colorContrast/BackgroundChecker";
import { ContrastFinder } from "../../components/colorContrast/ContrastFinder";
import { ReverseAndRandom } from "components/colorContrast/ReverseAndRandom";

export const ColorContrast = () => {
  const { colorContrastState, colorContrastDispatch } = useColorContrast();

  return (
    <div
      className="color-contrast-container"
      style={{ backgroundColor: colorContrastState.backgroundColor }}
    >
      <div className={style.demoText}>
        <h1 style={{ color: colorContrastState.textColor }}>Aa HackneoG</h1>
      </div>

      <div className="color-setter-container">
        <TextChecker />
        <br />
        <BackgroundChecker />
        <ContrastFinder />
        <ReverseAndRandom />

        <a  target="_blank"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `Hey 👋 everyone, Test our new project on developer tools `
          )}&url=${encodeURIComponent(
            "(link of the project)"
          )}&via=vishruta_patil`}
        >
          <button>Tweet</button>
        </a>
      </div>
    </div>
  );
};
