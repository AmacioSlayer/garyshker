import { useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HeroProjectPage from "./hero-project-page";
import Projects from "components/common/projects";
import DownloadIcon from "assets/svg/download-icon";
import Footer from "components/common/footer";

export default function EndedProject() {
  const navigate = useNavigate();
  const location = useLocation();
  const projectData = location.state.project;

  const currentProject = [
    {
      id: "1",
      name: "2024 Cosmosömke",
      url: "cosmosomke",
      primary_text: "1 500 детей",
      secondary_text: "будут подготовлены к школе",
      end_date: "08-31-2024",
      is_active: true,
      is_ended: false,
      is_soon: false,
    },
  ];

  const downloadLinks = [
    { id: 2, link: "/files/Отчет_РюкзакКит_2023.pdf" },
    { id: 3, link: "/files/Отчет РюкзакКИТ 2022.pdf" },
    { id: 4, link: "/files/Отчет_РюкзакKIT_2021.pdf" },
  ];

  const getLink = useMemo(() => {
    let linkObject = downloadLinks.find((link) => {
      return link.id == projectData.id;
    });
    return linkObject ? linkObject.link : "";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroProjectPage projectData={projectData} />
      <section id="about-project" className="flex flex-col gap-8 px-4 py-8">
        <h3 className="text-[28px] font-bold">Коротко о проекте</h3>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-white-50">Цель</h2>
            <p>{projectData.goal_text}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-white-50">Результат</h2>
            <p>
              Выполнили задачу, все дети получили рюкзаки и были готовы к школе.
            </p>
          </div>
        </div>
        <div className="h-80 bg-about-cosmosomke bg-no-repeat bg-center bg-cover"></div>
      </section>
      <section className="flex flex-col gap-6 px-4 py-8">
        <div className="flex flex-col pt-8 border-t border-white-10">
          <div className="flex flex-col gap-8 p-5 rounded-xl bg-white-10">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <div className="flex flex-col gap-[10px]">
                  <h6 className="text-sm text-white-40">Цель</h6>
                  <span className="text-lg font-semibold">
                    {projectData.goal.toLocaleString() || 0} ₸
                  </span>
                </div>
                <hr className="h-5 border border-white-20" />
                <div className="flex flex-col gap-[10px]">
                  <h6 className="text-sm text-white-40">Собрано</h6>
                  <span className="text-lg font-semibold">
                    {projectData.collected.toLocaleString() || 0} ₸
                  </span>
                </div>
              </div>
            </div>
            {getLink && (
              <a
                href={getLink}
                target="_blank"
                rel="noopener norefferer"
                className="btn btn-white p-5 flex items-center justify-center gap-2 cursor-pointer no-underline"
              >
                <DownloadIcon />
                <span className="text-sm">Скачать отчёт</span>
              </a>
            )}
          </div>
        </div>
      </section>
      <Projects
        heading={"Текущий проект"}
        projects={currentProject}
        parent="/projects"
      />
      <Footer />
    </>
  );
}
