import React, { useState } from "react";
import MyModal from "./modal";

function SheetsModal({ isModalOpen, setIsModalOpen, data }) {
  const openBasicModal = () => {
    setIsModalOpen(true);
  };

  const closeBasicModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <MyModal
        modalOpen={isModalOpen}
        setModalOpen={closeBasicModal}
        Modaltitle="Sheets Modal"
        modalContent={""}
      >
        {/* Children to be passed to the basic modal */}
        {data.length > 0 && (
          <table className=" border-separate border-spacing-2 border border-slate-500">
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th class="border border-slate-600 ..." key={key}>
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-700 ..."> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  click </button> </td>
                <td class="border border-slate-700 ...">  </td>
              </tr>
              {data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, index) => (
                    <td class="border border-slate-700 ..." key={index}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </MyModal>
    </>
  );
}

export default SheetsModal;
