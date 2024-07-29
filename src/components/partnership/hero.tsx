import Header from "components/common/header";

export default function PartnershipHero() {
  return (
    <section className="aspect-square flex flex-col justify-end grow -mb-16 bg-partnership bg-no-repeat bg-contain">
      <Header />
      <div className="flex flex-col gap-4 px-4 py-6 my-16 text-center">
        <h1 className="text-[40px] font-semibold uppercase">Партнерство</h1>
        <p className="text-[15px]">
          Сотрудничайте с нами и развивайте образовательные возможности вместе с
          GARYSHKER
        </p>
      </div>
    </section>
  );
}
