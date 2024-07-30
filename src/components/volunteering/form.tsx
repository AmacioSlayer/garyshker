import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import FileIcon from "assets/svg/file-icon";
import TrashIcon from "assets/svg/trash-icon";
import UploadIcon from "assets/svg/upload-icon";

export default function VolunteerForm() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [telegram, setTelegram] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [aboutSelf, setAboutSelf] = useState<string>("");
  const [file, setFile] = useState<File | "">("");

  const [isNameValid, setNameValid] = useState<boolean>(true);
  const [isPhoneValid, setPhoneValid] = useState<boolean>(true);
  const [isTelegramValid, setTelegramValid] = useState<boolean>(true);
  const [isAgeValid, setAgeValid] = useState<boolean>(true);
  const [isRoleValid, setRoleValid] = useState<boolean>(true);
  const [isAboutSelfValid, setAboutSelfValid] = useState<boolean>(true);

  const [isLoading, setLoading] = useState<boolean>(false);

  const RemoveNonNumericCharacters = (input: string): string => {
    return input.replace(/[^\d]/g, "");
  };

  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedPhoneNumber = RemoveNonNumericCharacters(event.target.value);
    setPhone(cleanedPhoneNumber);
    setPhoneValid(true);
  };

  const clearFile = () => {
    setFile("");
    let fileInput: any = document.getElementById("file");
    fileInput.value = "";
    fileInput.file = File;
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);

      const formData = new FormData();

      formData.append("entry.171030146", name);
      formData.append("entry.1209060155", `+${phone}`);
      formData.append("entry.31253993", telegram);
      formData.append("entry.738117113", age);
      formData.append("entry.1622257365", role);
      formData.append("entry.640290452", aboutSelf);
      // file && formData.append("entry.1752715525", file);

      fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdOif0wZ9jdRwsNIx-FCT3KMgyG-qegzUJPVbEOnJgRP9OMow/formResponse",
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
    }
  };

  const validateForm = () => {
    if (name) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
    if (phone.length === 11) {
      setPhoneValid(true);
    } else {
      setPhoneValid(false);
    }
    if (telegram) {
      setTelegramValid(true);
    } else {
      setTelegramValid(false);
    }
    if (age) {
      setAgeValid(true);
    } else {
      setAgeValid(false);
    }
    if (role) {
      setRoleValid(true);
    } else {
      setRoleValid(false);
    }
    if (aboutSelf) {
      setAboutSelfValid(true);
    } else {
      setAboutSelfValid(false);
    }

    if (name && phone.length === 11 && telegram && age && role && aboutSelf) {
      return true;
    } else {
      alert("Заполните форму правильно!");
      return false;
    }
  };

  return (
    <section className="px-4 pt-6 pb-12">
      <form className="flex flex-col gap-8 p-5 bg-dark-2 shadow-black-8 rounded-xl">
        <h6 className="text-[26px] font-semibold">Оставить заявку</h6>
        <div className="flex flex-col gap-6 py-5 border-y border-y-dark-3">
          <div className="flex flex-col gap-3 text-sm">
            <label>Имя</label>
            <input
              className={isNameValid ? "" : "invalid"}
              type="text"
              placeholder="Введите имя"
              onChange={(e) => {
                setName(e.target.value);
                setNameValid(true);
              }}
              disabled={isLoading}
            />
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <label>Номер телефона</label>
            <InputMask
              className={isPhoneValid ? "" : "invalid"}
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
            <label>Telegram / Instagram / WhatsApp</label>
            <input
              className={isTelegramValid ? "" : "invalid"}
              type="text"
              placeholder="Введите контактные данные"
              onChange={(e) => {
                setTelegram(e.target.value);
                setTelegramValid(true);
              }}
              disabled={isLoading}
            />
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <label>Возраст</label>
            <input
              className={isAgeValid ? "" : "invalid"}
              type="text"
              placeholder="Введите Ваш возраст"
              onChange={(e) => {
                setAge(e.target.value);
                setAgeValid(true);
              }}
              disabled={isLoading}
            />
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <label>Роль</label>
            <select
              className={`select ${isRoleValid ? "" : "invalid"}`}
              defaultValue={""}
              onChange={(e) => {
                setRole(e.target.value);
                setRoleValid(true);
              }}
              disabled={isLoading}
            >
              <option value="" disabled>
                Выберите роль
              </option>
              <option value="Волонтер Cosmosomke">Волонтер Cosmosomke</option>
              <option value="Проектный менеджер">Проектный менеджер</option>
              <option value="Менеджер по продажам">Менеджер по продажам</option>
              <option value="SMM">SMM</option>
              <option value="Дизайнер">Дизайнер</option>
              <option value="Разработчик">Разработчик</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <label>О себе</label>
            <textarea
              className={`textarea h-40 ${isRoleValid ? "" : "invalid"}`}
              placeholder="Вкратце о себе"
              onChange={(e) => {
                setAboutSelf(e.target.value);
                setAboutSelfValid(true);
              }}
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
        <p className="text-sm text-center text-white-50">
          Нажимая "Оставить заявку" вы соглашаетесь на обработку персональных
          данных
        </p>
        <button
          className="btn btn-white"
          onClick={submitForm}
          disabled={isLoading}
        >
          <span>Оставить заявку</span>
        </button>
      </form>
    </section>
  );
}
