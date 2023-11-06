import { useState } from "react";
import MyModal from "../../components/modal";

const ModalPage = () => {
  let [modalOpen, setModalOpen] = useState(false);

  const onOpen = () => {
    setModalOpen(true);
  };

  let name = "there 👋";

  return (
    <div className="fixed inset-0 flex  flex-col items-center justify-center">
      <div className="font-mono text-6xl py-10 font-semibold ">
        Hi {name || "There 👋"}
      </div>
      <div>
        <button
          type="button"
          onClick={onOpen}
          className="rounded-md bg-black bg-opacity-60 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
        >
          Open Modal
        </button>
      </div>
      <MyModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        displayName={true}
        Modaltitle={'Enter Name'}
      />
    </div>
  );
};

export default ModalPage;
