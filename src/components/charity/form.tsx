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

  const proceedToTipTopPay = (e: any) => {
    e.preventDefault();
    // @ts-ignore
    var widget = new tiptop.Widget({
      language: "ru",
    });
    widget.pay(
      "auth", // или 'charge'
      {
        //options
        publicId: "pk_fcf4b46ef01c3b48fe3c3b0e8039b", //id из личного кабинета
        description: "Пожертвование в ЧФ 'GARYSHKER FOUNDATION'", //назначение
        amount: +sum, //сумма
        currency: "KZT", //валюта
        accountId: "address", //идентификатор плательщика (необязательно)
        // invoiceId: '1234567', //номер заказа  (необязательно)
        // skin: "classic", //дизайн виджета (необязательно)
        autoClose: 3,
      },
      {
        onSuccess: function (options: any) {
          // success
          console.log("success");
          //действие при успешной оплате
        },
        onFail: function (reason: any, options: any) {
          // fail
          console.log("fail");
          //действие при неуспешной оплате
        },
        onComplete: function (paymentResult: any, options: any) {
          //Вызывается как только виджет получает от api.tiptoppay ответ с результатом транзакции.
          //например вызов вашей аналитики Facebook Pixel
        },
      }
    );
  };

  return (
    <section className="px-4 pt-6 pb-12">
      <form className="flex flex-col gap-8 p-5 bg-dark-2 shadow-black-8 rounded-xl">
        <div className="flex flex-col gap-4">
          <h6 className="text-[26px] font-semibold">Форма оплаты</h6>
          <span className="text-sm text-white-50">Укажите сумму и выберите способ оплаты</span>
        </div>
        <div className="flex flex-col gap-6 py-5 border-y border-y-dark-3">
          <div className="flex flex-col gap-3 text-sm">
            <label className="text-sm">Введите сумму</label>
            <div className="flex flex-col relative">
              <input type="number" value={sum} onChange={(e) => setSum(e.target.value)} />
              <span className="absolute right-4 bottom-4 text-white-50">₸</span>
            </div>
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
            disabled={!(+sum > 0)}
            // disabled={!sum || !agree}
          >
            <KaspiIcon />
            <span>Kaspi Платежи</span>
          </button>
          <button
            className="btn btn-white flex items-center justify-center gap-[10px] p-5"
            onClick={proceedToTipTopPay}
            disabled={!(+sum > 0)}
          >
            <CardIcon />
            <span>Онлайн-платеж</span>
          </button>
        </div>
      </form>
    </section>
  );
}
