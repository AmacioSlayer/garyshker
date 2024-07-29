export default function AboutProjectPage() {
  const goalsList = [
    "Устранение разрыва в доступе к образовательным ресурсам",
    "Повышение мотивации учащихся",
    "Долгосрочные положительные экономические последствия",
    "Создание солидарного сообщества",
  ];

  return (
    <>
      <section id="about-project" className="flex flex-col gap-8 px-4 py-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-sm font-medium text-white-50">Наша миссия</h2>
          <div className="flex flex-col gap-4 text-sm">
            <p className="text-sm">
              расширение образовательных возможностей и осознанности молодого
              населения страны в жизненно важных и актуальных темах,
            </p>
            <p className="text-sm">
              тем самым вдохновляя их на активное участие в позитивных
              изменениях.
            </p>
          </div>
          <div className="h-80 bg-about-cosmosomke bg-no-repeat bg-center bg-cover"></div>
        </div>
      </section>
      <section className="flex flex-col gap-8 px-4 py-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-medium text-white-40">Наша цель</h2>
          <p className="text-sm">
            Цель проекта заключается в том, чтобы ежегодно как можно больше
            детей из малообеспеченных семей и сельских местностей по всей стране
            получили необходимые школьные принадлежности для успешного начала
            учебного процесса.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {goalsList.map((goal, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-4 rounded-lg bg-goal-gradient"
            >
              <div className="flex items-center justify-center w-8 h-8 font-semibold rounded-md bg-primary-20">
                <span className="text-primary">{index + 1}</span>
              </div>
              <div>
                <span className="text-[15px]">{goal}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
