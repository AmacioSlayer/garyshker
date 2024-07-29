import { useState } from "react";
import { useNavigate } from "react-router-dom";
import XIcon from "assets/svg/x-icon";
import InputMask from "react-input-mask";
import FileIcon from "assets/svg/file-icon";
import TrashIcon from "assets/svg/trash-icon";
import UploadIcon from "assets/svg/upload-icon";

type FileUploadState = {
  files: File[];
};

export default function ApplyForBackpack() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [parentName, setParentName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [fileUploadState, setFileUploadState] = useState<FileUploadState>({
    files: [],
  });

  const [isLoading, setLoading] = useState<boolean>(false);

  const RemoveNonNumericCharacters = (input: string): string => {
    return input.replace(/[^\d]/g, "");
  };

  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedPhoneNumber = RemoveNonNumericCharacters(event.target.value);
    setPhone(cleanedPhoneNumber);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setFileUploadState((prevState: any) => ({
        files: [...prevState.files, ...selectedFiles],
      }));
    }
  };

  const handleFileRemove = (e: any, fileIndex: number) => {
    e.preventDefault();
    setFileUploadState((prevState: any) => ({
      files: prevState.files.filter(
        (_: any, index: any) => index !== fileIndex
      ),
    }));
  };

  const goBack = (e: any) => {
    e.preventDefault();
    navigate(-1);
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("entry.1628403620", name);
    formData.append("entry.738117113", age?.toString() || "");
    formData.append("entry.171030146", parentName);
    formData.append("entry.1449421679", address);
    formData.append("entry.1209060155", phone);
    fileUploadState.files.length && formData.append("entry.640290452", fileUploadState.files[0]);

    fetch(
      "https://docs.google.com/forms/u/0/d/1EqJVylf_7tBo1Bk1U-6Cqdrrz5K-IAX0C7cIwpAApNs/formResponse",
      {
        method: "POST",
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
    <div className="absolute flex flex-col inset-0 bg-dark z-20">
      <div className="flex items-center justify-between p-4">
        <h4>Получить рюкзак</h4>
        <button onClick={goBack}>
          <XIcon />
        </button>
      </div>
      <div className="px-4 py-6 grow overflow-y-auto">
        <form className="flex flex-col gap-8 p-5 bg-dark-2 shadow-black-8 rounded-xl">
          <h6 className="text-[26px] font-semibold">Оставить заявку</h6>
          <div className="flex flex-col gap-6 py-5 border-y border-y-dark-3">
            <div className="flex flex-col gap-3 text-sm">
              <label>ФИО ребенка</label>
              <input
                type="text"
                placeholder="Введите ФИО"
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <label>Возраст ребенка</label>
              <input
                type="text"
                placeholder="Укажите возраст ребенка"
                onChange={(e) => setAge(+e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <label>ФИО родителя / заявителя</label>
              <input
                type="text"
                placeholder="Введите ФИО"
                onChange={(e) => setParentName(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <label>Область, город, населенный пункт</label>
              <input
                type="text"
                placeholder="Укажите место проживания"
                onChange={(e) => setAddress(e.target.value)}
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
            {/* <div className="flex flex-col gap-3 text-sm">
              <label>Документы</label>
              <div className="text-white-50">
                <h6>Прикрепите следующий список документов:</h6>
                <ul className="list-[disc] pl-6">
                  <li>Справка №1</li>
                  <li>Справка №2</li>
                  <li>Справка №3</li>
                </ul>
              </div>
              {fileUploadState &&
                fileUploadState.files.map((file, index) => (
                  <div
                    className="flex items-center gap-4 p-4 bg-dark-4 rounded-lg"
                    key={index}
                  >
                    <FileIcon />
                    <span className="text-sm grow">{file.name}</span>
                    <button
                      onClick={(e) => handleFileRemove(e, index)}
                      disabled={isLoading}
                    >
                      <TrashIcon />
                    </button>
                  </div>
                ))}
              <label
                className="h-40 flex flex-col items-center justify-center gap-2 p-4 text-white-50 border-2 border-dashed border-white-30 rounded-lg cursor-pointer"
                htmlFor="file"
              >
                <UploadIcon />
                <p>Загрузить документ</p>
              </label>
              <input
                type="file"
                id="file"
                multiple
                hidden
                accept=".doc,.docx,.ppt,.pptx,.pdf"
                onChange={handleFileChange}
                disabled={isLoading}
              />
            </div> */}
          </div>
          <button
            className="btn btn-white"
            onClick={submitForm}
            disabled={
              !name ||
              !age ||
              !parentName ||
              !address ||
              phone.length !== 11 ||
              isLoading
            }
          >
            <span>Оставить заявку</span>
          </button>
        </form>
      </div>
    </div>
  );
}
