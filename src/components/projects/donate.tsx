import { useNavigate } from "react-router-dom";

export default function Donate() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-6 px-4 py-8">
      <div className="flex flex-col pt-8 border-t border-white-10">
        <div className="flex flex-col gap-8 p-5 rounded-xl bg-white-10">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-[10px]">
                <h6 className="text-sm text-white-40">Цель</h6>
                <span className="text-lg font-semibold">{(19000000).toLocaleString()} ₸</span>
              </div>
              <hr className="h-5 border border-white-20" />
              <div className="flex flex-col gap-[10px]">
                <h6 className="text-sm text-white-40">Собрано</h6>
                <span className="text-lg font-semibold">{(11667157).toLocaleString()} ₸</span>
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary p-5"
            onClick={() => navigate(`/projects/${"cosmosomke"}/donate`)}
          >
            <span>Сделать пожертвование</span>
          </button>
        </div>
      </div>
    </section>
  );
}
