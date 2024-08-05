import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "assets/svg/logo";
import MenuIcon from "assets/svg/menu-icon";
import XIcon from "assets/svg/x-icon";
import LanguageIcon from "assets/svg/language-icon";
import ChevronDown from "assets/svg/chevron-down";
import MailIcon from "assets/svg/mail-icon";
import PhoneIcon from "assets/svg/phone-icon";

export default function Header() {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    isMenuOpen
      ? document.body.classList.add("modal-open")
      : document.body.classList.remove("modal-open");
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="flex items-center px-4 py-[14px] justify-between fixed top-0 left-0 right-0 z-10 backdrop-blur-3xl">
        <button onClick={() => navigate("/")}>
          <Logo />
        </button>
        <button
          className="w-9 h-9 flex items-center justify-center bg-menu shadow-menu backdrop-blur-sm rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </header>
      <aside
        className={`fixed inset-0 z-[1] h-screen overflow-auto bg-dark -translate-y-full transition-all duration-500 ${
          isMenuOpen ? "visible !translate-y-0" : "invisible"
        }`}
      >
        <div className="flex flex-col gap-8 px-4 py-8 mt-16">
          {/* <div>
            <h6 className="text-sm text-white-50">Язык</h6>
            <div className="flex items-center gap-[10px] py-4 border-b border-white-20">
              <LanguageIcon />
              <span className="grow text-[18px] font-medium">Русский</span>
              <ChevronDown />
            </div>
          </div> */}
          <div>
            <h6 className="text-sm text-white-50">Главная</h6>
            <div
              className="flex items-center gap-[10px] py-4 border-b border-white-20 cursor-pointer"
              onClick={() => navigate("/charity")}
            >
              <span className="grow text-[18px] font-medium">
                Благотворительность
              </span>
            </div>
            <div
              className="flex items-center gap-[10px] py-4 border-b border-white-20 cursor-pointer"
              onClick={() => navigate("/volunteering")}
            >
              <span className="grow text-[18px] font-medium">Волонтерство</span>
            </div>
            <div
              className="flex items-center gap-[10px] py-4 border-b border-white-20 cursor-pointer"
              onClick={() => navigate("/partnership")}
            >
              <span className="grow text-[18px] font-medium">Партнерство</span>
            </div>
          </div>
          <div>
            <h6 className="text-sm text-white-50">Проекты</h6>
            <div
              className="flex items-center gap-[10px] py-4 border-b border-white-20 cursor-pointer"
              onClick={() => navigate("/projects/cosmosomke")}
            >
              <span className="flex items-center justify-between grow text-[18px] font-medium">
                <span>Cosmosömke</span>
                <div className="w-fit flex items-center gap-2 p-2 pr-3 rounded-full bg-primary-20">
                  <div className="flex items-center justify-center w-[15px] h-[15px] bg-primary-20 rounded-full">
                    <div className="w-[5px] h-[5px] bg-primary rounded-full"></div>
                  </div>
                  <div className="text-[13px] font-medium text-primary">
                    В активной стадии
                  </div>
                </div>
              </span>
            </div>
            <div className="flex items-center gap-[10px] py-4 border-b border-white-20">
              <span className="flex items-center justify-between grow text-[18px] font-medium text-white-30">
                <span>Jaryq</span>
                <div className="w-fit flex items-center gap-2 px-3 py-2 rounded-full bg-white-8">
                  <div className="text-[13px] font-medium text-white-20">
                    Раздел в разработке
                  </div>
                </div>
              </span>
            </div>
            <div className="flex items-center gap-[10px] py-4 border-b border-white-20">
              <span className="flex items-center justify-between grow text-[18px] font-medium text-white-30">
                <span>Bölme</span>
                <div className="w-fit flex items-center gap-2 px-3 py-2 rounded-full bg-white-8">
                  <div className="text-[13px] font-medium text-white-20">
                    Раздел в разработке
                  </div>
                </div>
              </span>
            </div>
            <div className="flex items-center gap-[10px] py-4 border-b border-white-20">
              <span className="flex items-center justify-between grow text-[18px] font-medium text-white-30">
                <span>G.Grants</span>
                <div className="w-fit flex items-center gap-2 px-3 py-2 rounded-full bg-white-8">
                  <div className="text-[13px] font-medium text-white-20">
                    Раздел в разработке
                  </div>
                </div>
              </span>
            </div>
            <div className="flex items-center gap-[10px] py-4 border-b border-white-20">
              <span className="flex items-center justify-between grow text-[18px] font-medium text-white-30">
                <span>Магазин мерча</span>
                <div className="w-fit flex items-center gap-2 px-3 py-2 rounded-full bg-white-8">
                  <div className="text-[13px] font-medium text-white-20">
                    Раздел в разработке
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div>
            <h6 className="text-sm text-white-50">Остальное</h6>
            <div
              className="flex items-center gap-[10px] py-4 border-b border-white-20 cursor-pointer"
              onClick={() => navigate("/nco-documentation")}
            >
              <span className="grow text-[18px] font-medium">
                Документация НКО
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <MailIcon />
              <a href="mailto:info@garyshker.com">info@garyshker.com</a>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon />
              <a href="tel:+77772845090">+7 777 284 50 90</a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
