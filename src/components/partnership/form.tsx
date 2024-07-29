import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import FileIcon from "assets/svg/file-icon";
import TrashIcon from "assets/svg/trash-icon";
import UploadIcon from "assets/svg/upload-icon";

export default function PartnershipForm() {
  const navigate = useNavigate();

  const [type, setType] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [aboutSelf, setAboutSelf] = useState<string>("");
  const [file, setFile] = useState<File | "">("");

  const [isLoading, setLoading] = useState<boolean>(false);

  const RemoveNonNumericCharacters = (input: string): string => {
    return input.replace(/[^\d]/g, "");
  };

  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedPhoneNumber = RemoveNonNumericCharacters(event.target.value);
    setPhone(cleanedPhoneNumber);
  };

  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const clearFile = () => {
    setFile("");
    let fileInput: any = document.getElementById("file");
    fileInput.value = "";
    fileInput.files = [File];
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("entry.1212122677", type);
    formData.append("entry.188675014", name);
    formData.append("entry.115642553", `+${phone}`);
    formData.append("entry.104099307", email);
    formData.append("entry.1296827638", aboutSelf);
    // file && formData.append("entry.1747970951", file);

    fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-t6mM1sxTYu3K_dnNPhrTDloaTLqr2ARgkPq5TWjpzqM9IA/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    )
      .then(() => {
        navigate("/form-success");
        setLoading(false);
      })
      .catch((err) => alert(err));
  };

  return (
    <section className="px-4 pt-6 pb-12">
      <form className="flex flex-col gap-8 p-5 bg-dark-2 shadow-black-8 rounded-xl">
        <h6 className="text-[26px] font-semibold">Оставить заявку</h6>
        <div className="flex flex-col gap-6 py-5 border-y border-y-dark-3">
          <div className="flex flex-col gap-3 text-sm">
            <label>Кем вы являетесь (Юр.лицо / Физ.лицо)</label>
            <select
              className="select"
              defaultValue={""}
              onChange={(e) => setType(e.target.value)}
              disabled={isLoading}
            >
              <option value="" disabled>
                Выберите тип
              </option>
              <option value="Юридическое лицо">Юридическое лицо</option>
              <option value="Физическое лицо">Физическое лицо</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <label>Название / ФИО</label>
            <input
              type="text"
              placeholder="Введите Название / ФИО"
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <label>Номер телефона</label>
            <InputMask
              type="tel"
              placeholder="+7"
              mask="+7 999 999 99 99"
              maskChar=""
              value={phone}
              onChange={onPhoneChange}
              disabled={isLoading}
            />
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="example@example.com"
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <label>О компании / О себе</label>
            <textarea
              className="textarea h-40"
              placeholder="Вкратце о компании / о себе"
              onChange={(e) => setAboutSelf(e.target.value)}
              disabled={isLoading}
            />
          </div>
          {/* <div className="flex flex-col gap-3 text-sm">
            <label>Дополнительные файлы (опционально)</label>
            {file && (
              <div className="flex items-center gap-4 p-4 bg-dark-4 rounded-lg">
                <FileIcon />
                <span className="text-sm grow">{file.name}</span>
                <button onClick={clearFile} disabled={isLoading}>
                  <TrashIcon />
                </button>
              </div>
            )}
            <label
              className="h-40 flex flex-col items-center justify-center gap-2 p-4 text-white-50 border-2 border-dashed border-white-30 rounded-lg cursor-pointer"
              htmlFor="file"
            >
              <UploadIcon />
              <p>Загрузить файл (.docx / .pptx / .pdf)</p>
              <p>Не больше 50 МБ</p>
            </label>
            <input
              type="file"
              id="file"
              hidden
              accept=".doc,.docx,.ppt,.pptx,.pdf"
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : "")}
              disabled={isLoading}
            />
          </div> */}
        </div>
        <button
          className="btn btn-white"
          onClick={submitForm}
          disabled={
            !type ||
            !name ||
            phone.length !== 11 ||
            !emailRegEx.test(email) ||
            !aboutSelf ||
            isLoading
          }
        >
          <span>Оставить заявку</span>
        </button>
      </form>
    </section>
  );
}
