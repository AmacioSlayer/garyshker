import { useState, useEffect } from "react";
import { emptyProject, ProjectType } from "types/projects-type";
import HeroProjectPage from "components/projects/hero-project-page";
import Footer from "components/common/footer";
import AboutProjectPage from "components/projects/about-project-page";
import Donate from "./donate";
import Projects from "components/common/projects";

export default function ProjectPage() {
  const [projectData, setProjectData] = useState<ProjectType>(emptyProject);

  const heading = "История проектов";
  const projects = [
    {
      id: "1",
      name: "2024 Cosmosömke",
      url: "cosmosomke_2024",
      primary_text: "1 500 детей",
      secondary_text: "будут подготовлены к школе",
      end_date: "08-31-2024",
      is_active: true,
      is_ended: false,
      is_soon: false,
    },
    {
      id: "2",
      name: "2023 Cosmosömke",
      url: "cosmosomke_2023",
      primary_text: "500 детей",
      secondary_text: "были подготовлены к школе",
      end_date: "08-31-2023",
      is_active: false,
      is_ended: true,
      is_soon: false,
    },
  ];

  const filteredProjects = projects.filter(
    (project) => project.id !== projectData.id
  );

  // Temporary, delete when backend  connected
  useEffect(() => {
    setProjectData(projects[0]);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroProjectPage projectData={projectData} />
      <AboutProjectPage />
      <Donate />
      <Projects
        heading={heading}
        projects={filteredProjects}
        parent="/projects/cosmosomke"
      />
      <Footer />
    </>
  );
}
