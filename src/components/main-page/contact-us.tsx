export default function ContactUs() {
  return (
    <section className="flex flex-col gap-16 px-4 pt-8 pb-16" id="contact-us">
      <h1 className="text-[32px] font-semibold">
        Давайте строить сплоченное общество вместе!
      </h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h6 className="text-white-50">Телефон</h6>
          <a className="text-2xl" href="tel:+77772845090">
            +7 777 284 50 90
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-white-50">Эл. почта</h6>
          <a className="text-2xl" href="mailto:info@garyshker.com">
            info@garyshker.com
          </a>
        </div>
      </div>
    </section>
  );
}
