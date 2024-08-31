import { useEffect } from "react";
import Header from "components/common/header";

export default function PublicOffer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="flex flex-col gap-12 px-4 py-12 mt-16">
        <h3 className="text-[32px] font-semibold">Публичная оферта</h3>
        <span>
          <p className="text-sm">
            ЧФ «GARYSHKER FOUNDATION» (далее — Исполнитель) предлагает договор
            публичной оферты для физических и юридических лиц (далее — Заказчик)
            о нижеследующем.
          </p>
        </span>
        <span>
          <h6 className="text-center text-sm font-bold uppercase">
            1. Термины и определения
          </h6>
          <h6 className="text-sm font-bold">1.1 Оферта</h6>
          <p className="text-sm">
            документ «Договор публичной оферты об оказании услуг»,
            опубликованный на сайте Исполнителя https://www.garyshker.com/.
          </p>
          <h6 className="text-sm font-bold">1.2. Договор Оферты</h6>
          <p className="text-sm">
            договор между Исполнителем и Заказчиком об оказании услуг, который
            заключается через Акцепт Оферты.
          </p>
          <h6 className="text-sm font-bold">1.3. Акцепт Оферты</h6>
          <p className="text-sm">
            принятие Оферты Заказчиком, когда он обращается к Исполнителю за
            оказанием услуг. Акцептом Оферты считается нажатие Заказчиком кнопки
            «Онлайн-платеж» под сформированным заказом на сайте
            https://www.garyshker.com/.
          </p>
          <h6 className="text-sm font-bold">1.4. Заказчик</h6>
          <p className="text-sm">лицо, совершившее Акцепт Оферты.</p>
          <h6 className="text-sm font-bold">1.5. Исполнитель</h6>
          <p className="text-sm">ЧФ «GARYSHKER FOUNDATION»</p>
        </span>
        <span>
          <p className="text-sm">
            Договор не требует скрепления печатями и/или подписания Заказчиком и
            Исполнителем.
          </p>
        </span>
        <span>
          <h6 className="text-center text-sm font-bold uppercase">
            2. Предмет Договора
          </h6>
          <p className="text-sm">
            <span className="font-bold">2.1. </span>
            Исполнитель оказывает Заказчику услуги в соответствии с условиями
            Договора Оферты и текущими Тарифами, опубликованными на сайте
            https://www.garyshker.com/.
          </p>
          <p className="text-sm">
            <span className="font-bold">2.2. </span>
            Заказчик принимает услуги Исполнителя и полностью их оплачивает.
          </p>
          <p className="text-sm">
            <span className="font-bold">2.3. </span>
            Если заказчик оставляет отзыв о приобретенных услугах в соцсетях
            Исполнителя или на его сайте, он дает согласие на размещение
            персональных данных в отзывах: имени и фамилии.
          </p>
          <p className="text-sm">
            <span className="font-bold">2.4. </span>
            Заказчик соглашается, что совершая Акцепт Договора он подтверждает,
            что ознакомлен, согласен, полностью и безоговорочно принимает все
            условия Договора Оферты.
          </p>
        </span>
        <span>
          <h6 className="text-center text-sm font-bold uppercase">
            3. Срок действия Договора
          </h6>
          <p className="text-sm">
            <span className="font-bold">3.1. </span>
            Договор вступает в силу со дня акцепта заказчиком и действует до
            полного исполнения сторонами обязательств по Договору.
          </p>
        </span>
        <span>
          <h6 className="text-center text-sm font-bold uppercase">
            4. Порядок расчетов
          </h6>
          <p className="text-sm">
            <span className="font-bold">4.1. </span>
            Оплата производится в рублях перечислением на расчетный счет
            Исполнителя или платежной картой на сайте
            https://www.garyshker.com/.
          </p>
        </span>
        <span>
          <h6 className="text-center text-sm font-bold uppercase">
            5. Права и обязанности
          </h6>
          <p className="text-sm">
            <h6 className="text-sm font-bold">5.1. Исполнитель обязуется:</h6>
            <div>
              <span className="font-bold">5.1.1. </span>
              Оказать Заказчику услуги надлежащего качества в надлежащем объеме
              и в согласованные Сторонами сроки.
            </div>
            <div>
              <span className="font-bold">5.1.2. </span>
              Обеспечить полную сохранность предоставленных Заказчиком данных,
              материалов, а также конфиденциальность информации, полученной им в
              процессе оказания услуг.
            </div>
            <h6 className="text-sm font-bold">5.2. Исполнитель имеет право:</h6>
            <div>
              <span className="font-bold">5.2.1. </span>
              Получать от Заказчика необходимые данные и информацию для оказания
              услуг и полагаться на них без дополнительной проверки.
            </div>
            <div>
              <span className="font-bold">5.2.2. </span>
              При необходимости привлекать к исполнению услуг сторонних
              консультантов, специалистов и экспертов.
            </div>
            <h6 className="text-sm font-bold">5.3. Заказчик обязуется:</h6>
            <div>
              <span className="font-bold">5.3.1. </span>
              Предоставить Исполнителю любые необходимые и достоверные данные и
              информацию для оказания услуг.
            </div>
            <div>
              <span className="font-bold">5.3.2. </span>
              Своевременно и полностью оплатить услуги Исполнителя.
            </div>
          </p>
        </span>
        <span>
          <h6 className="text-center text-sm font-bold uppercase">
            6. Основания и порядок расторжения Договора
          </h6>
          <p className="text-sm">
            <span className="font-bold">6.1. </span>
            После оформления и оплаты заказа Заказчик имеет право отказаться от
            услуг Исполнителя и запросить возврат денег, направив письменное
            уведомление «Отказ от предоставления услуг» на адрес электронной
            почты info@garyshker.com
          </p>
          <p className="text-sm">
            <span className="font-bold">6.2. </span>
            Исполнитель вправе удержать из уплаченной Заказчиком суммы стоимость
            уже оказанных услуг на момент получения уведомления об отказе.
          </p>
        </span>
        <span>
          <h6 className="text-center text-sm font-bold uppercase">
            7. Разрешение споров
          </h6>
          <p className="text-sm">
            <span className="font-bold">7.1. </span>
            Споры и разногласия по вопросам исполнения Договора разрешаются на
            переговорах.
          </p>
          <p className="text-sm">
            <span className="font-bold">7.2. </span>
            Если на переговорах Стороны не смогут достичь согласия, спор
            передается в суд.
          </p>
        </span>
        <span>
          <h6 className="text-center text-sm font-bold uppercase">
            8. Реквизиты компании
          </h6>
          <p>Частный Фонд "GARYSHKER FOUNDATION"</p>
          <p>БИН: 210640025149</p>
          <p>
            Адрес: Казахстан, Алматы, Проспект Достык, дом 162, кв/офис корпус 4
          </p>
          <p>ИИК: KZ12722S000038329758</p>
          <p>Банк: АО "Kaspi Bank"</p>
          <p>БИК: CASPKZKA</p>
          <p>Контактный номер: +7 702 000 63 69</p>
          <p>E-mail: info@garyshker.com</p>
        </span>
      </section>
    </>
  );
}
