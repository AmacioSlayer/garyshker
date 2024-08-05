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
      goal_text: "500 детей, 500 рюкзаков.",
      end_date: "08-31-2023",
      goal:  5964997,
      collected:  5964997,
      is_active: false,
      is_ended: true,
      is_soon: false,
    },
    {
      id: "3",
      name: "2022 Cosmosömke",
      url: "cosmosomke_2022",
      primary_text: "400 детей",
      secondary_text: "были подготовлены к школе",
      goal_text: "400 детей, 400 рюкзаков.",
      end_date: "08-31-2022",
      goal: 4182077,
      collected: 4182077,
      is_active: false,
      is_ended: true,
      is_soon: false,
    },
    {
      id: "4",
      name: "2021 Cosmosömke",
      url: "cosmosomke_2021",
      primary_text: "370 детей",
      secondary_text: "были подготовлены к школе",
      goal_text: "370 детей, 370 рюкзаков.",
      end_date: "08-31-2021",
      goal:  3552086,
      collected:  3552086,
      is_active: false,
      is_ended: true,
      is_soon: false,
    },
    {
      id: "5",
      name: "2020 Cosmosömke",
      url: "cosmosomke_2020",
      primary_text: "50 детей",
      secondary_text: "были подготовлены к школе",
      goal_text: "50 детей, 50 рюкзаков.",
      end_date: "08-31-2020",
      goal:  850000,
      collected:  850000,
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
