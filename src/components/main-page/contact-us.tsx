export default function ContactUs() {
  return (
    <section className="flex flex-col gap-16 px-4 pt-8 pb-16">
      <h1 className="text-[32px] font-semibold">
        Давайте строить сплоченное общество вместе!
      </h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h6>phone</h6>
          <a className="text-2xl" href="tel:+77772845090">
            +7 777 284 50 90
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h6>email</h6>
          <a className="text-2xl" href="mailto:info@garyshker.com">
            info@garyshker.com
          </a>
        </div>
      </div>
    </section>
  );
}
