import { useNavigate } from "react-router-dom";
import LangSwitch from "components/common/lang-switch";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="flex flex-col gap-10 px-4 py-10 border-t border-dark-gray">
      <div className="flex gap-10">
        <ul className="flex flex-col gap-6">
          <li className="cursor-pointer" onClick={() => navigate("/")}>
            Главная
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/charity")}>
            Благотворительность
          </li>
          {/* <li className="cursor-pointer" onClick={() => navigate("/volunteering")}>
            Волонтерство
          </li> */}
          <li className="cursor-pointer" onClick={() => navigate("/partnership")}>
            Партнерство
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/nco-documentation")}>
            Документация НКО
          </li>
        </ul>
        <ul className="flex flex-col gap-6">
          <li className="cursor-pointer" onClick={() => navigate("/policy")}>
            Политика конфиденциальности
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/public-offer")}>
            Публичная оферта
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/payment-policy")}>
            Политика онлайн платежей
          </li>
        </ul>
      </div>
      {/* <LangSwitch /> */}
      <div className="text-sm text-white-30">Garyshker © {`${new Date().getFullYear()}`}</div>
    </footer>
  );
}
