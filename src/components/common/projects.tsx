import Calendar from "assets/svg/calendar";
import Check from "assets/svg/check";
import { useNavigate } from "react-router-dom";
import { ProjectType } from "types/projects-type";

export default function Projects({
  heading,
  projects,
  parent,
}: {
  heading: string;
  projects: ProjectType[];
  parent: string;
}) {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className={`flex flex-col gap-6 ${
        parent === "/projects" ? "px-4 py-8" : "p-4"
      }`}
    >
      <h6 className="text-[15px] font-medium text-white-50">{heading}</h6>
      <div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-8 py-8 first:border-t border-b border-y-dark-gray"
          >
            <div className="flex flex-col gap-4">
              {(project.is_active || project.end_date || project.is_soon) && (
                <div className="flex items-center gap-2">
                  {project.is_active && (
                    <div className="w-fit flex items-center gap-2 px-[10px] py-2 rounded-full bg-primary-20">
                      <div className="flex items-center justify-center w-5 h-5 bg-primary-20 rounded-full">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <div className="text-sm font-medium text-primary">
                        В активной стадии
                      </div>
                    </div>
                  )}
                  {!project.is_active && project.is_ended && (
                    <div className="w-fit flex items-center gap-2 px-[10px] py-2 rounded-full bg-success-20">
                      <Check />
                      <div className="text-sm font-medium text-success">
                        Успешно завершено
                      </div>
                    </div>
                  )}
                  {project.end_date && (
                    <div className="w-fit flex items-center gap-2 px-[10px] py-2 rounded-full bg-dark-gray-20">
                      <Calendar />
                      <div className="text-sm font-medium text-gray">
                        {`${new Date(project.end_date).toLocaleDateString()}`}
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-semibold">{project.name}</h2>
                <p
                  className={`${parent === "/projects" ? "text-white-50" : ""}`}
                >
                  {project.primary_text && (
                    <span className="text-primary">
                      {project.primary_text}{" "}
                    </span>
                  )}
                  {project.secondary_text}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {project.is_active && (
                <button
                  className="btn btn-primary grow"
                  onClick={() =>
                    navigate(`${parent}/${project.url}`, {
                      state: { project: project },
                    })
                  }
                >
                  <span>Узнать больше</span>
                </button>
              )}
              {!project.is_active && project.is_ended && (
                <button className="btn btn-white grow" disabled>
                  <span>Узнать больше</span>
                </button>
              )}
              {project.is_soon && (
                <button className="btn" disabled={project.is_soon}>
                  <span>Раздел в разработке</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
