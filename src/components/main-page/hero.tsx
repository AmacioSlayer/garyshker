import { useNavigate } from "react-router-dom";
import ArrowNE from "assets/svg/arrow-ne";
import Header from "components/common/header";

export default function HeroSection() {
  const navigate = useNavigate();

  const heroLinks = [
    { name: "Поддержать фонд", path: "/charity", new: false },
    // { name: "Волонтерство", path: "/volunteering", new: false },
    { name: "Партнество", path: "/partnership", new: false },
    { name: "G.store", path: "/g.store", new: true },
  ];

  return (
    <section className="flex flex-col h-screen bg-hero bg-no-repeat bg-cover">
      <Header />
      <div className="flex flex-col px-4 mt-16 items-center justify-evenly grow">
        <h1 className="text-center text-[32px] font-semibold">
          Делаем образование <span className="text-primary italic">доступным</span> для каждого
        </h1>
        <div className="flex flex-col gap-5 w-full">
          {heroLinks.map((link, index) => (
            <button
              key={index}
              className="group/link flex items-center justify-between gap-4 p-4 bg-white-5 border border-white-5 rounded-lg"
              onClick={() => navigate(link.path)}
            >
              <span className="text-xl">{link.name}</span>
              <div className="flex items-center gap-2">
                {link.new && (
                  <div className="text-[13px] px-3 py-1 rounded-lg bg-primary-gradient shadow-primary-40">New</div>
                )}
                <div className="w-8 h-8 flex items-center justify-center bg-shadow rounded-lg group-hover/link:bg-primary-gradient group-hover/link:shadow-primary-40">
                  <ArrowNE />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
