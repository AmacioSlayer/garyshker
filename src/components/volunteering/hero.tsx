import Header from "components/common/header";

export default function VolunteerHero() {
  return (
    <section className="aspect-square flex flex-col justify-end grow -mb-16 bg-volunteer bg-no-repeat bg-contain">
      <Header />
      <div className="flex flex-col gap-4 px-4 py-6 my-16 text-center">
        <h1 className="text-[40px] font-semibold uppercase">Волонтерство</h1>
        <p className="text-[15px]">
          Присоединяйся к команде энергичных и талантливых людей, готовых
          вооплощать важные проекты для развития общества
        </p>
      </div>
    </section>
  );
}
