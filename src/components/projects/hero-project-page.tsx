import { useNavigate } from "react-router-dom";
import { ProjectType } from "types/projects-type";
import Header from "components/common/header";
import Check from "assets/svg/check";
import Calendar from "assets/svg/calendar";

export default function HeroProjectPage({
  projectData,
}: {
  projectData: ProjectType;
}) {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col h-screen bg-cosmosomke bg-no-repeat bg-contain">
      <Header />
      <div className="flex flex-col justify-end gap-8 px-4 py-8 mt-16 grow">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-4xl font-semibold">{projectData.name}</h1>
            <p>
              <span className="text-primary">{projectData.primary_text}</span>{" "}
              {projectData.secondary_text}
            </p>
          </div>
          <div className="flex self-center gap-2">
            {(projectData.is_active ||
              projectData.end_date ||
              projectData.is_soon) && (
              <div className="flex items-center gap-2">
                {projectData.is_active && (
                  <div className="w-fit flex items-center gap-2 px-[10px] py-2 rounded-full bg-primary-20">
                    <div className="flex items-center justify-center w-5 h-5 bg-primary-20 rounded-full">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div className="text-sm font-medium text-primary">
                      В активной стадии
                    </div>
                  </div>
                )}
                {!projectData.is_active && projectData.is_ended && (
                  <div className="w-fit flex items-center gap-2 px-[10px] py-2 rounded-full bg-success-20">
                    <Check />
                    <div className="text-sm font-medium text-success">
                      Успешно завершено
                    </div>
                  </div>
                )}
                {projectData.is_soon && (
                  <div className="w-fit px-4 py-2 rounded-full bg-dark-gray-20">
                    <div className="text-sm font-medium text-gray">Скоро</div>
                  </div>
                )}
                {projectData.end_date && (
                  <div className="w-fit flex items-center gap-2 px-[10px] py-2 rounded-full bg-dark-gray-20">
                    <Calendar />
                    <div className="text-sm font-medium text-gray">
                      {`${new Date(projectData.end_date).toLocaleDateString()}`}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {projectData.is_active && (
          <div className="flex flex-col gap-6 w-full">
            <button
              className="btn btn-primary p-5"
              onClick={() => navigate(`/projects/${"cosmosomke"}/donate`)}
            >
              <span>Сделать пожертвование</span>
            </button>
            <button
              className="btn btn-white p-5"
              onClick={() =>
                navigate("/projects/cosmosomke/apply-for-backpack")
              }
            >
              <span>Получить рюкзак</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
