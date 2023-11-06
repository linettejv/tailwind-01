import React from "react";
import { Dialog, Transition } from "@headlessui/react";


function MyModal({ modalOpen, setModalOpen, Modaltitle , children , modalContent  }) {
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Transition appear show={modalOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className=" inset-0 z-50 overflow-y-auto w-300 h-1000"
          onClose={closeModal}
        >
          {/* this is used for overlay effect in the entire page */}
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0  bg-black opacity-30" />
            </Transition.Child>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className=" inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {Modaltitle}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {modalContent}
                  </p>
                  {children}
                  {/* <div className="w-10 h-10">
                  <img src="assets/close-red-icon.webp"  alt="close symbol" className="h-full w-full mt-5"/>
                </div> */}
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="btn btn-blue"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default MyModal;
