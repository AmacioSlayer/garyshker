import ChevronDown from "assets/svg/chevron-down";
import LanguageIcon from "assets/svg/language-icon";

export default function LangSwitch() {
  return (
    <div className="w-fit flex items-center gap-4 p-3 border border-white-8 bg-white-8 rounded">
      <div className="flex items-center gap-4">
        <LanguageIcon />
        <span>Русский</span>
      </div>
      <ChevronDown />
    </div>
  );
}
