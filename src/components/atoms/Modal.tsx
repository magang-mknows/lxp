import Image from "next/image";
import { FC, Fragment, ReactElement } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ModalProps } from "./types";
import Logo from "../../../public/assets/navbar/logo.svg";

const Modal: FC<ModalProps> = ({
  title,
  children,
  button,
  lookup,
  hasButton,
  hasImage,
  withClose,
  widthModal,
  onClose,
}): ReactElement => {
  return (
    <Fragment>
      {lookup && (
        <div
          className="relative z-50 "
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 transition-opacity bg-neutral-50 bg-opacity-75 " />
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center w-full min-h-full p-4 text-center sm:items-center sm:p-0">
              <div
                className={`relative w-auto overflow-hidden text-left transition-all transform bg-neutral-50 rounded-lg shadow-xl sm:my-8 ${widthModal} `}
              >
                <div className="w-full px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                  <div
                    className={`flex items-center justify-between w-full ${
                      !hasImage && "!justify-end"
                    }`}
                  >
                    {hasImage && (
                      <Image src={Logo} width={82} height={35} alt={"Logo kg"} loading="lazy" />
                    )}
                    {withClose && (
                      <AiOutlineClose
                        onClick={onClose}
                        className="text-2xl font-bold text-gray-400 cursor-pointer"
                      />
                    )}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    {title && (
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        {title}
                      </h3>
                    )}
                    <div className="flex items-center w-full">{children}</div>
                  </div>
                </div>
                {hasButton && (
                  <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                    {button}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Modal;
