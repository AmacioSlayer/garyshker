import Header from "components/common/header";

export default function CharityHero() {
  return (
    <section className="aspect-square flex flex-col justify-end grow -mb-16 bg-charity bg-no-repeat bg-contain">
      <Header />
      <div className="flex flex-col gap-4 px-4 py-6 my-16 text-center">
        <h1 className="text-[40px] font-semibold uppercase">Сбор средств</h1>
        <p className="text-[15px]">
          Мы рады единомышленникам, которые готовы поддержать нашу миссию и
          помочь в реализации наших проектов.
        </p>
      </div>
    </section>
  );
}
