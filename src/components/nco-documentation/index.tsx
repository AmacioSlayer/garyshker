import { useEffect } from "react";
import DownloadIcon from "assets/svg/download-icon";
import Footer from "components/common/footer";
import Header from "components/common/header";

export default function NCODocumentation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="flex flex-col gap-12 px-4 py-16 mt-16">
        <div className="flex flex-col gap-4">
          <h3 className="text-[43px] font-semibold">Документация НКО</h3>
          <p className="text-[15px] text-white-70">
            Нам важно поддерживать прозрачность и открытость деятельности
            организации, так как мы являемся НКО.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between py-5 border-b border-dark-gray-2">
            <span>Устав НКО</span>
            <a
              href="/files/Устав.pdf"
              target="_blank"
              rel="noopener norefferer"
              className="flex items-center gap-2 cursor-pointer"
            >
              <DownloadIcon />
              <span className="text-sm">Скачать</span>
            </a>
          </div>
          <div>
            <div className="flex items-center justify-between py-5 border-b border-dark-gray-2">
              <span>Отчет за 2023 год</span>
              <a
                href="/files/Отчет_РюкзакКит_2023.pdf"
                target="_blank"
                rel="noopener norefferer"
                className="flex items-center gap-2 cursor-pointer"
              >
                <DownloadIcon />
                <span className="text-sm">Скачать</span>
              </a>
            </div>
            <div className="flex items-center justify-between py-5 border-b border-dark-gray-2">
              <span>Отчет за 2022 год</span>
              <a
                href="/files/Отчет РюкзакКИТ 2022.pdf"
                target="_blank"
                rel="noopener norefferer"
                className="flex items-center gap-2 cursor-pointer"
              >
                <DownloadIcon />
                <span className="text-sm">Скачать</span>
              </a>
            </div>
            <div className="flex items-center justify-between py-5 border-b border-dark-gray-2">
              <span>Отчет за 2021 год</span>
              <a
                href="/files/Отчет_РюкзакKIT_2021.pdf"
                target="_blank"
                rel="noopener norefferer"
                className="flex items-center gap-2 cursor-pointer"
              >
                <DownloadIcon />
                <span className="text-sm">Скачать</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
