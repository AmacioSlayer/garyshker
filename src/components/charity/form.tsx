import { useState } from "react";
import CardIcon from "assets/svg/card-icon";
import KaspiIcon from "assets/svg/kaspi-icon";

export default function CharityForm() {
  const [sum, setSum] = useState<string>("");
  const [agree, setAgree] = useState<boolean>(false);

  const navigateToKaspi = (e: any) => {
    e.preventDefault();

    let amount = sum;

    let link = document.createElement("a");
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.href = `https://kaspi.kz/pay/GARYSHKERF?started_from=QR&amount=${amount}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section className="px-4 pt-6 pb-12">
      <form className="flex flex-col gap-8 p-5 bg-dark-2 shadow-black-8 rounded-xl">
        <div className="flex flex-col gap-4">
          <h6 className="text-[26px] font-semibold">Форма оплаты</h6>
          <span className="text-sm text-white-50">
            Укажите сумму и выберите способ оплаты
          </span>
        </div>
        <div className="flex flex-col gap-6 py-5 border-y border-y-dark-3">
          <div className="flex flex-col gap-3 text-sm">
            <label className="text-sm">Введите сумму</label>
            <div className="flex flex-col relative">
              <input
                type="number"
                value={sum}
                onChange={(e) => setSum(e.target.value)}
              />
              <span className="absolute right-4 bottom-4 text-white-50">₸</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input
            id="agree"
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label htmlFor="agree" className="text-sm">
            Я согласен(-на) с <a>Условиями Оферты</a>
          </label>
        </div>
        <div className="flex flex-col gap-6">
          <button
            className="btn btn-kaspi flex items-center justify-center gap-[10px] p-5"
            onClick={navigateToKaspi}
            disabled={!sum || !agree}
          >
            <KaspiIcon />
            <span>Kaspi Платежи</span>
          </button>
          <button
            className="btn btn-white flex items-center justify-center gap-[10px] p-5"
            disabled
          >
            <CardIcon />
            <span>Онлайн-платеж</span>
          </button>
        </div>
      </form>
    </section>
  );
}
