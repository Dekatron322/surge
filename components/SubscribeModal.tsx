"use client";

import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";

interface SubscribeModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const SubscribeModal = ({ isOpen, closeModal }: SubscribeModalProps) => (
  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-2 right-2 z-10 w-fit p-2 bg-[#261b29] rounded-full"
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>
                <div className="flex-1 flex flex-col gap-3">
                  <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                    <Image
                      src="/coming1.png"
                      alt=""
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1 flex-col gap-2">
                  <h2 className="font-semibold text-xl text-center">
                    Subscribe to our newsletter
                  </h2>
                  <div className="mt-1 flex flex-wrap gap-1">
                    <div className="flex justify-center w-full text-right ">
                      <p className="text-black font-semibold text-center">
                        Be the first to get notified about our lunch
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-5 gap-5 justify-center self-center">
                    <input
                      type="text"
                      placeholder="Enter your email..."
                      className="px-4 py-2 border xl:w-[600px] w-[300px] border-gray-300 rounded-md bg-transparent"
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
);

export default SubscribeModal;
