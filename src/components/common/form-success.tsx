import { useNavigate } from "react-router-dom";
import SuccessIcon from "assets/svg/success-icon";
import Header from "components/common/header";

export default function FormSuccess() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col mt-16 bg-dark">
      <Header />
      <div className="flex flex-col items-center gap-8 px-4 py-20">
        <SuccessIcon />
        <div className="flex flex-col gap-8 text-center">
          <h3 className="text-3xl font-semibold">Заявка отправлена успешно</h3>
          <p className="text-[15px]">
            После того, как ваша заявка будет рассмотрена, вы обязательно
            получите ответ на указанные контактные данные
          </p>
        </div>
        <button
          className="btn btn-white w-full"
          onClick={() => navigate("/", { replace: true })}
        >
          <span>Вернуться на главную</span>
        </button>
      </div>
    </div>
  );
}
