import { FC, forwardRef, ReactElement, Ref } from "react";
import { TextFieldProps } from "./types";
import { RiErrorWarningFill, RiCheckFill } from "react-icons/ri";

const TextField: FC<TextFieldProps> = forwardRef(
  (
    {
      isTextArea,
      type,
      placeholder,
      error,
      label,
      name,
      value,
      onChange,
      disabled = false,
      success,
      warning,
      required,
      className,
    }: TextFieldProps,
    ref: Ref<HTMLInputElement>,
  ): ReactElement => {
    return (
      <section className="flex flex-col gap-y-1 my-2">
        {label && (
          <label htmlFor={name} className="font-bold text-neutral-900 outline-version3-500 ">
            {label} {required && <span className="text-red-700 font-bold">*</span>}
          </label>
        )}
        {isTextArea ? (
          <textarea
            value={value}
            name={name}
            disabled={disabled}
            rows={12}
            id="question"
            className={`
          ${
            error &&
            !warning &&
            !success &&
            "focus:border-[0.5px] text-sm focus:border-red-600 border-red-600  bg-red-50 border-[0.5px]"
          }

          ${
            error &&
            !warning &&
            success &&
            "focus:border-[0.5px] text-sm focus:border-red-600 border-red-600  bg-red-50 border-1"
          }

          ${
            success &&
            !warning &&
            !error &&
            "focus:border-[0.5px] text-sm focus:border-green-400 border-green-400  bg-green-50 border-[0.5px]"
          }
          
          ${
            warning &&
            !success &&
            !error &&
            "focus:border-[0.5px] text-sm focus:border-yellow-600 border-yellow-600 bg-yellow-50 border-[0.5px]"
          }
          
          ${
            !warning &&
            !error &&
            !success &&
            "border-[0.5px] border-neutral-500 rounded-md px-3 py-2 text-sm"
          }
          ${className}
            rounded-lg p-3 outline-none focus:outline-none
          `}
            placeholder={placeholder}
            onChange={onChange}
          />
        ) : (
          <input
            value={value}
            type={type}
            name={name}
            disabled={disabled}
            className={`
          ${
            error &&
            !warning &&
            !success &&
            "focus:border-[0.5px] text-sm focus:border-red-600 border-red-600  bg-red-50 border-[0.5px]"
          }

          ${
            error &&
            !warning &&
            success &&
            "focus:border-[0.5px] text-sm focus:border-red-600 border-red-600  bg-red-50 border-1"
          }

          ${
            success &&
            !warning &&
            !error &&
            "focus:border-[0.5px] text-sm focus:border-green-400 border-green-400  bg-green-50 border-[0.5px]"
          }
          
          ${
            warning &&
            !success &&
            !error &&
            "focus:border-[0.5px] text-sm focus:border-yellow-600 border-yellow-600 bg-yellow-50 border-[0.5px]"
          }
          
          ${
            !warning &&
            !error &&
            !success &&
            "border-[0.5px] border-neutral-500 rounded-md px-3 py-2 text-sm"
          }
          ${className}
            rounded-lg p-3 outline-none focus:outline-none
          `}
            placeholder={placeholder}
            onChange={onChange}
            ref={ref}
          />
        )}

        {error && (
          <div className="flex items-center text-sm w-full gap-x-1">
            <RiErrorWarningFill className="text-warning-700" />
            <span className="text-warning-700">{error}</span>
          </div>
        )}

        {warning && (
          <div className="flex items-center w-full gap-x-1 text-sm">
            <RiErrorWarningFill className="text-version3-400" />
            <span className="text-version3-400">{error}</span>
          </div>
        )}

        {success && (
          <div className="flex items-center w-full text-sm gap-x-1">
            <RiCheckFill className="text-version2-300" />
            <span className="text-version2-300">{error}</span>
          </div>
        )}
      </section>
    );
  },
);
TextField.displayName = "TextField";
export default TextField;
