import { FC } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInfo, faWindowClose } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: React.ReactNode;
  children?: React.ReactNode;
  onClose?: () => void;
}

export const CustomModal: FC<Props> = ({ title, onClose, children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <div
        className="fixed top-0 left-0 z-10 w-full h-full bg-black opacity-50"
        onClick={onClose}
      />
      <div className="absolute z-50 max-w-2xl p-20 transform -translate-x-1/2 top-1/3 left-1/2 -translate-y-1/3 max-h-175">
        <div className="flex flex-col p-4 bg-white rounded-2xl">
          <div className="my-2 font-bold">{title}</div>
          <div className="rounded-2xl">{children}</div>
          <div className="mt-4 text-center">
            <button
              className="px-4 py-2 border btn background-transparent rounded-xl"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
