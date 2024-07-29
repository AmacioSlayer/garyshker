export default function About() {
  return (
    <section className="flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-semibold">О проекте</h2>
      <div className="flex flex-col gap-4 text-sm">
        <p className="text-white-70">
          Мы частный благотворительный фонд, призванный расширять возможности
          образования и инклюзивной культуры.
        </p>
        <p className="text-white-70">
          Поднимая важные и актуальные темы на казахском языке и предоставляя
          возможность получить качественное образование для молодежи вне
          зависимости от их социального статуса, возраста и места проживания,
          фонд стремится к целостному развитию общества.
        </p>
      </div>
    </section>
  );
}
