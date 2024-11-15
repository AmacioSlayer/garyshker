import { useState } from "react";
import { useNavigate } from "react-router-dom";
import XIcon from "assets/svg/x-icon";
import InputMask from "react-input-mask";
import JWLR_1 from "assets/img/garyshker-x-mozi_1.png";
// import CardIcon from "assets/svg/card-icon";
// import KaspiIcon from "assets/svg/kaspi-icon";

export default function GStorePaymentModal() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  // const [address, setAddress] = useState<string>("");

  const [isNameValid, setNameValid] = useState<boolean>(true);
  const [isPhoneValid, setPhoneValid] = useState<boolean>(true);

  // const [agree, setAgree] = useState<boolean>(false);

  const [isLoading, setLoading] = useState<boolean>(false);

  const RemoveNonNumericCharacters = (input: string): string => {
    return input.replace(/[^\d]/g, "");
  };

  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedPhoneNumber = RemoveNonNumericCharacters(event.target.value);
    setPhone(cleanedPhoneNumber);
    setPhoneValid(true);
  };

  const goBack = (e: any) => {
    e.preventDefault();
    navigate(-1);
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);

      const formData = new FormData();

      formData.append("entry.1438071992", name);
      formData.append("entry.1247587654", `+${phone}`);

      fetch(
        "https://docs.google.com/forms/u/0/d/1ERuww8bFoWpFGSuqut6bXL2Xw-aKp1tOHNfqZUEve8Y/formResponse", // TODO: ADD API ENDPOINT
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      )
        .then(() => {
          navigate("/form-success");
          setLoading(false);
        })
        .catch((err) => alert(err));
    }
  };

  const validateForm = () => {
    if (name) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
    if (phone.length === 11) {
      setPhoneValid(true);
    } else {
      setPhoneValid(false);
    }

    if (name && phone.length === 11) {
      return true;
    } else {
      alert("Заполните форму правильно!");
      return false;
    }
  };

  // const navigateToKaspi = (e: any) => {
  //   e.preventDefault();

  //   let link = document.createElement("a");
  //   link.target = "_blank";
  //   link.rel = "noopener noreferrer";
  //   link.href = `https://kaspi.kz/pay/GARYSHKERF?started_from=QR&amount=50000`;
  //   document.body.appendChild(link);
  //   link.click();
  //   link.remove();

  //   navigate(-1);
  // };

  // const proceedToTipTopPay = (e: any) => {
  //   e.preventDefault();
  //   // @ts-ignore
  //   var widget = new tiptop.Widget({
  //     language: "ru",
  //   });
  //   widget.pay(
  //     "auth", // или 'charge'
  //     {
  //       //options
  //       publicId: "pk_fcf4b46ef01c3b48fe3c3b0e8039b", //id из личного кабинета
  //       description: "GARYSHKER x MOZI JWLR - 1 шт.", //назначение
  //       amount: 50000, //сумма
  //       currency: "KZT", //валюта
  //       accountId: "address", //идентификатор плательщика (необязательно)
  //       // invoiceId: '1234567', //номер заказа  (необязательно)
  //       // skin: "classic", //дизайн виджета (необязательно)
  //       autoClose: 3,
  //     },
  //     {
  //       onSuccess: function (options: any) {
  //         // success
  //         console.log("success");
  //         //действие при успешной оплате
  //       },
  //       onFail: function (reason: any, options: any) {
  //         // fail
  //         console.log("fail");
  //         //действие при неуспешной оплате
  //       },
  //       onComplete: function (paymentResult: any, options: any) {
  //         //Вызывается как только виджет получает от api.tiptoppay ответ с результатом транзакции.
  //         //например вызов вашей аналитики Facebook Pixel
  //       },
  //     }
  //   );
  // };

  return (
    <div className="modal absolute flex flex-col inset-0 bg-dark z-20">
      <div className="flex items-center justify-between p-4">
        <h4>G.store</h4>
        <div className="cursor-pointer" onClick={goBack}>
          <XIcon />
        </div>
      </div>
      <div className="px-4 py-6 grow overflow-y-auto">
        <form className="flex flex-col gap-8 p-5 rounded-xl bg-dark-2">
          <div className="flex flex-col gap-4">
            <h4 className="text-[26px] font-semibold">Заявка на покупку</h4>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-sm text-white-50">Ваш заказ</h6>
            <div className="flex items-center gap-4">
              <img className="rounded-lg" src={JWLR_1} alt="" height={48} width={48} />
              <div className="flex flex-col gap-1">
                <div className="text-sm font-semibold">GARYSHKER x MOZI JWLR</div>
                <div className="text-sm">{(50000).toLocaleString()} ₸ x 1 шт.</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <label className="text-sm">Имя</label>
              <div className="flex flex-col">
                <input
                  className={isNameValid ? "" : "invalid"}
                  type="text"
                  placeholder="Ваше имя"
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameValid(true);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm">Номер телефона</label>
              <div className="flex flex-col">
                <InputMask
                  className={isPhoneValid ? "" : "invalid"}
                  type="tel"
                  placeholder="+7"
                  mask="+7 999 999 99 99"
                  maskChar=""
                  value={phone}
                  onChange={onPhoneChange}
                  disabled={isLoading}
                />
              </div>
            </div>
            {/* <div className="flex flex-col gap-3">
              <label className="text-sm">Город и адрес доставки</label>
              <div className="flex flex-col">
                <input type="tel" placeholder="Введите город и адрес" />
              </div>
              <p className="text-sm text-white-50">
                * Доставка бесплатная по городу Алматы. В другие страны и города доставка обсуждается с менеджером.{" "}
                <span className="text-primary">Связаться</span>
              </p>
            </div> */}
          </div>
          {/* <div className="flex flex-col gap-6">
            <button className="btn btn-kaspi flex items-center justify-center gap-[10px] p-5" onClick={navigateToKaspi}>
              <KaspiIcon />
              <span>Kaspi Платежи</span>
            </button>
            <button
              className="btn btn-white flex items-center justify-center gap-[10px] p-5"
              onClick={proceedToTipTopPay}
            >
              <CardIcon />
              <span>Онлайн-платеж</span>
            </button>
          </div> */}
          <p className="text-sm text-center text-white-50">
            Нажимая "Оставить заявку" вы соглашаетесь на обработку персональных данных
          </p>
          <button className="btn btn-white" onClick={submitForm} disabled={isLoading}>
            <span>Оставить заявку</span>
          </button>
        </form>
      </div>
    </div>
  );
}
