import { useNavigate } from "react-router-dom";
import LangSwitch from "components/common/lang-switch";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="flex flex-col gap-10 px-4 py-10 border-t border-dark-gray">
      <div className="flex gap-10">
        <ul className="flex flex-col gap-6">
          <li>Главная</li>
          <li>О проекте</li>
          <li>Проекты</li>
          <li>Контакты</li>
          <li>Документация НКО</li>
        </ul>
        <ul className="flex flex-col gap-6">
          <li>Благотворительность</li>
          <li>Волонтерство</li>
          <li>Партнерство</li>
        </ul>
      </div>
      {/* <LangSwitch /> */}
      <div className="text-sm text-white-30">
        Garyshker © {`${new Date().getFullYear()}`}
      </div>
    </footer>
  );
}
