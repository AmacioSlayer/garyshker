import { useEffect } from "react";
import HeroSection from "components/main-page/hero";
import About from "components/main-page/about";
import Projects from "components/common/projects";
import ContactUs from "components/main-page/contact-us";
import Footer from "components/common/footer";

export default function MainPage() {
  const heading = "Наши проекты";
  const projects = [
    {
      id: "1",
      name: "Cosmosömke",
      url: "cosmosomke",
      primary_text: "",
      secondary_text:
        "Социальный проект, направленный на помощь детям из малообеспеченных семей.",
      end_date: "",
      is_active: true,
      is_ended: false,
      is_soon: false,
    },
    // {
    //   id: "2",
    //   name: "Jaryq",
    //   url: "jaryq",
    //   primary_text: "",
    //   secondary_text:
    //     "Участие в жизни молодежи, в онлайн и офлайн пространстве, для обсуждения важных тем для нашего общества.",
    //   end_date: "",
    //   is_active: false,
    //   is_ended: false,
    //   is_soon: true,
    // },
    // {
    //   id: "3",
    //   name: "Bölme",
    //   url: "bolme",
    //   primary_text: "",
    //   secondary_text:
    //     "Комьюнити, которое дает возможность обсуждать актуальные темы в казахо-язычной среде.",
    //   end_date: "",
    //   is_active: false,
    //   is_ended: false,
    //   is_soon: true,
    // },
    // {
    //   id: "4",
    //   name: "G.Grants",
    //   url: "g.grants",
    //   primary_text: "",
    //   secondary_text:
    //     "Материальная поддержка учеников старших классов и студентов их уязвимых слоев населения для их дальнейшего обучения в лучших школах и университетах.",
    //   end_date: "",
    //   is_active: false,
    //   is_ended: false,
    //   is_soon: true,
    // },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <About />
      <Projects heading={heading} projects={projects} parent="/projects" />
      <ContactUs />
      <Footer />
    </>
  );
}
