import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "components/common/header";
import Footer from "components/common/footer";
import { Carousel } from "react-responsive-carousel";
import garyshkerBadge from "assets/img/garyshker-badge.png";
import moziBadge from "assets/img/mozi-badge.png";
import JWLR_1 from "assets/img/garyshker-x-mozi_1.png";
import JWLR_2 from "assets/img/garyshker-x-mozi_2.png";
import { getProducts } from "api/products";

export default function GStore() {
  const navigate = useNavigate();

  useEffect(() => {
    // getProducts();
  }, []);

  const garyshkerXmozi = (
    <section>
      <div className="flex flex-col gap-6 p-4 pt-16 mt-16">
        <div className="flex">
          <img src={garyshkerBadge} height={48} width={48} alt="" />
          <img className="absolute left-14" src={moziBadge} height={48} width={48} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-4xl font-semibold">GARYSHKER x MOZI</h3>
          <p className="text-white-60">
            Космическая подвеска от Mozi J, созданная и выпущенная в коллаборации с благотворительным фондом Garyshker.
          </p>
        </div>
        <div className="text-primary">* 100% суммы идет на развитие фонда</div>
      </div>
      <div className="flex flex-col p-4 pb-10">
        <div className="flex flex-col gap-6 rounded-lg">
          <Carousel showThumbs={false} showStatus={false} showArrows={false} emulateTouch>
            <div>
              <div className="absolute top-0 left-0 right-0 h-40 bg-carousel-badges">
                <div className="flex gap-3 p-3">
                  <div className="h-8 px-3 py-2 text-[13px] bg-dark rounded-lg">Лимитировано</div>
                  <div className="h-8 px-3 py-2 text-[13px] bg-white text-dark rounded-lg">36 шт. доступно</div>
                </div>
              </div>
              <img className="rounded-lg" src={JWLR_1} alt="" />
              <p className="legend !m-0 !h-40 !w-full !bottom-0 !left-0 !right-0 !text-base !text-white !text-left !bg-transparent !bg-carousel-background !opacity-100 !rounded-lg">
                <div className="flex flex-col gap-1 pt-[70px]">
                  <div>GARYSHKER x MOZI JWLR</div>
                  <div>{(50000).toLocaleString()} ₸</div>
                </div>
              </p>
            </div>
            <div>
              <div className="absolute top-0 left-0 right-0 h-40 bg-carousel-badges">
                <div className="flex gap-3 p-3">
                  <div className="h-8 px-3 py-2 text-[13px] bg-dark rounded-lg">Лимитировано</div>
                  <div className="h-8 px-3 py-2 text-[13px] bg-white text-dark rounded-lg">36 шт. доступно</div>
                </div>
              </div>
              <img className="rounded-lg" src={JWLR_2} alt="" />
              <p className="legend !m-0 !h-40 !w-full !bottom-0 !left-0 !right-0 !text-base !text-white !text-left !bg-transparent !bg-carousel-background !opacity-100 !rounded-lg">
                <div className="flex flex-col gap-1 pt-[70px]">
                  <div>GARYSHKER x MOZI JWLR</div>
                  <div>{(50000).toLocaleString()} ₸</div>
                </div>
              </p>
            </div>
          </Carousel>
          <button
            className="btn btn-white flex items-center justify-center p-6 pb-5 text-dark text-sm font-semibold"
            onClick={() => navigate("/g.store/payment")}
          >
            Оформить покупку
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <Header />
      {garyshkerXmozi}
      <Footer />
    </>
  );
}
