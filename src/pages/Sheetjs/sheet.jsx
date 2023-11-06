import { useState } from "react";
import SheetsModal from "../../components/sheetsModal";



export default function Sheets() {
  let [modalOpen, setModalOpen] = useState(false);

  const onOpen = () => {
    setModalOpen(true);
  };

  return (
    <div className="fixed inset-0 flex  flex-col items-center justify-center">
      <div className="font-mono text-6xl py-10 font-semibold ">Sheet Js</div>
      <div>
        <button
          type="button"
          onClick={onOpen}
          className="rounded-md bg-green-600 bg-opacity-60 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
        >
          Open Sheets
        </button>
        {/* <MyModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          Modaltitle={"Open Sheets"}
        >
          <div className="w-10 h-10">
            <img
              src="assets/close-red-icon.webp"
              alt="close symbol"
              className="h-full w-full mt-5"
            />
          </div>
        </MyModal> */}
        <SheetsModal isModalOpen={modalOpen} setIsModalOpen={setModalOpen} data={""} />      </div>
    </div>
  );
}
