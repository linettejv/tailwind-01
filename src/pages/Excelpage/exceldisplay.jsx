import { useState } from "react";
import * as XLSX from "xlsx";
import SheetsModal from "../../components/sheetsModal";

const SheetsPage = () => {
  const [data, setData] = useState([]);
  let [modalOpen, setModalOpen] = useState(false);

  const onOpen = () => {
    setModalOpen(true);
  };

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      console.log(sheetName);
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
      console.log(data);
      onOpen();
    };
  };

  return (
    <div class="fixed inset-0 flex  flex-col items-center justify-center">
      <input type="file" accept=".xlsx , .xls" onChange={handleFileUpload} />

      {data.length > 0 && (
        <SheetsModal
          isModalOpen={modalOpen}
          setIsModalOpen={setModalOpen}
          data={data}
        />
      )}
    </div>
  );
};

export default SheetsPage;
