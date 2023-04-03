import { ReactElement, FC, forwardRef, Ref } from "react";
import { UploadFieldProps } from "./types";
import { AiFillWarning } from "react-icons/ai";

const UploadField: FC<UploadFieldProps> = forwardRef(
  (props, ref: Ref<HTMLInputElement>): ReactElement => {
    return (
      <section className="flex flex-col mb-6">
        {props.hasLabel && (
          <label htmlFor={props.name} className={"font-medium text-neutral-800 text-sm"}>
            {props.label} {props.required && <span className="text-red-700 font-bold">*</span>}
          </label>
        )}

        <label htmlFor={props.name}>
          <section
            className={`${props.error && " border-red-400"} ${
              props.className
            } flex overflow-hidden border-[1px]  rounded-lg  mb-2`}
          >
            <div className=" flex items-center ">
              <h1 className="bg-neutral-200 text-sm   h-ful text-neutral-900 py-2.5 cursor-pointer hover:bg-neutral-300 transition-colors ease-in-out duration-300 px-4 rounded-l-lg">
                Pilih File
              </h1>
              <p className={`${props.error ? "text-red-500 italic" : ""} px-4 text-xs`}>
                {props.files ? (
                  <span>
                    {props.files}
                    {props.error && " (erorr uploading file)"}
                  </span>
                ) : (
                  "Tidak ada file yang dipilih"
                )}
              </p>
            </div>
          </section>
        </label>
        {props.error && (
          <div className="flex items-center w-full gap-x-1 text-xs">
            <AiFillWarning className="text-warning-500" />
            <span className="text-warning-500">{props.error}</span>
          </div>
        )}

        <input
          {...props}
          id={props.name}
          ref={ref}
          type="file"
          className={`${
            props.error &&
            !props.warning &&
            !props.success &&
            "focus:outline-1 focus:ring-red-600 focus:border-1 bg-red-50 border-2 border-red-600"
          } hidden
        
        
        ${
          props.success &&
          !props.warning &&
          !props.error &&
          "focus:outline-1 focus:ring-green-600 focus:border-1 bg-green-50 border-2 border-green-600"
        }
        
        ${
          props.warning &&
          !props.success &&
          !props.error &&
          "focus:outline-1 focus:ring-yellow-600 focus:border-1 bg-yellow-50 border-2 border-yellow-600"
        }
        
        ${
          !props.warning &&
          !props.error &&
          !props.success &&
          "focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300"
        }

           rounded-lg p-4 outline-none focus:outline-none
        `}
        />
      </section>
    );
  },
);

UploadField.displayName = "UploadField";
export default UploadField;
