import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import XIcon from "assets/svg/x-icon";
import CardIcon from "assets/svg/card-icon";
import KaspiIcon from "assets/svg/kaspi-icon";

export default function DonateModal() {
  const navigate = useNavigate();

  const [sum, setSum] = useState<string>("");
  const [bpCount, setBpCount] = useState<string>("");
  const [bpSum, setBpSum] = useState<string>("");
  const bpRate: number = 13573;

  const [agree, setAgree] = useState<boolean>(false);

  const goBack = (e: any) => {
    e.preventDefault();
    navigate(-1);
  };

  const navigateToKaspi = (e: any) => {
    e.preventDefault();

    let amount = sum || bpSum;

    let link = document.createElement("a");
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.href = `https://kaspi.kz/pay/GARYSHKERF?started_from=QR&amount=${amount}`;
    document.body.appendChild(link);
    link.click();
    link.remove();

    navigate(-1);
  };

  useEffect(() => {
    bpCount ? setBpSum((+bpCount * bpRate).toString()) : setBpSum("");
  }, [bpCount]);

  return (
    <div className="modal absolute flex flex-col inset-0 bg-dark z-20">
      <div className="flex items-center justify-between p-4">
        <h4>Сделать пожертвование</h4>
        <div className="cursor-pointer" onClick={goBack}>
          <XIcon />
        </div>
      </div>
      <div className="px-4 py-6 grow overflow-y-auto">
        <form className="flex flex-col gap-8 p-5 rounded-xl bg-dark-2">
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-semibold">Форма оплаты</h4>
            <p className="text-sm text-white-50">
              Укажите сумму и выберите способ оплаты
            </p>
          </div>
          <div className="flex flex-col gap-5 py-5 border-y border-dark-3">
            <div className="flex flex-col gap-3">
              <label className="text-sm">Введите сумму</label>
              <div className="flex flex-col relative">
                <input
                  type="number"
                  value={sum}
                  onChange={(e) => {
                    setSum(e.target.value);
                    setBpCount("");
                  }}
                />
                <span className="absolute right-4 bottom-4 text-white-50">
                  ₸
                </span>
              </div>
            </div>
            <span className="text-center text-sm text-white-50">или</span>
            <div className="flex flex-col gap-3">
              <label className="text-sm">Введите количество рюкзаков</label>
              <div className="flex flex-col relative">
                <input
                  type="number"
                  value={bpCount}
                  onChange={(e) => {
                    setBpCount(e.target.value);
                    setSum("");
                  }}
                />
                <span className="absolute right-4 bottom-4 text-white-50">
                  шт.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm text-white-50">
                Сумма введенного кол-ва рюкзаков
              </label>
              <div className="flex flex-col relative">
                <input type="number" value={bpSum} disabled />
                <span className="absolute right-4 bottom-4 text-white-50">
                  ₸
                </span>
              </div>
              <p className="text-sm text-primary">
                * 1 рюкзак = {bpRate.toLocaleString()} ₸
              </p>
            </div>
          </div>
          {/* <div className="flex items-center gap-3">
            <input
              id="agree"
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label htmlFor="agree" className="text-sm">
              Я согласен(-на) с <a>Условиями Оферты</a>
            </label>
          </div> */}
          <div className="flex flex-col gap-6">
            <button
              className="btn btn-kaspi flex items-center justify-center gap-[10px] p-5"
              onClick={navigateToKaspi}
              disabled={!sum && !bpSum}
              // disabled={(!sum && !bpSum) || !agree}
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
      </div>
    </div>
  );
}
