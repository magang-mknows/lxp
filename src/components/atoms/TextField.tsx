import { FC, forwardRef, ReactElement, Ref } from "react";
import { TextFieldProps } from "./types";
import { RiErrorWarningFill, RiCheckFill } from "react-icons/ri";

const TextField: FC<TextFieldProps> = forwardRef(
  (
    {
      textAreaSize,
      hasLabel,
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
      <section className="flex flex-col">
        {label && (
          <label htmlFor={name} className="font-bold  outline-version3-500 ">
            {label} {required && <span className="text-red-700 font-bold">*</span>}
          </label>
        )}
        {isTextArea ? (
          <textarea
            value={value}
            name={name}
            disabled={disabled}
            rows={textAreaSize == "medium" ? 4 : 12}
            id="question"
            className={`
          ${
            error &&
            !warning &&
            !success &&
            " text-xs focus:border-warning-600 border-warning-600  bg-warning-100 text-neutral-800 border-[0.5px] "
          }

          ${
            error &&
            !warning &&
            success &&
            " text-xs focus:border-warning-600 border-warning-600  bg-warning-100 text-neutral-800 border-[0.5px] "
          }

          ${
            success &&
            !warning &&
            !error &&
            " text-xs focus:border-green-400 border-green-400  bg-green-50 border-[0.5px] "
          }
          
          ${
            warning &&
            !success &&
            !error &&
            " text-xs focus:border-yellow-600 border-yellow-600 bg-yellow-50 border-[0.5px] "
          }
          
          ${
            !warning &&
            !error &&
            !success &&
            "border-[0.5px]  border-neutral-500 rounded-md px-3 py-2 text-xs"
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
            " text-xs md:text-sm focus:border-warning-600 border-warning-600  bg-warning-100 text-neutral-800  "
          }

          ${
            error &&
            !warning &&
            success &&
            " text-xs md:text-sm focus:border-warning-600 border-warning-600  bg-warning-100 text-neutral-800  "
          }

          ${
            success &&
            !warning &&
            !error &&
            " text-xs md:text-sm focus:border-green-400 border-green-400  bg-green-50 border-[0.5px] "
          }
          
          ${
            warning &&
            !success &&
            !error &&
            " text-xs md:text-sm focus:border-yellow-600 border-yellow-600 bg-yellow-50 border-[0.5px] "
          }
          
          ${
            !warning &&
            !error &&
            !success &&
            "border-[0.5px]  border-neutral-500 rounded-md px-3 py-2 text-xs "
          }
          ${className}
          border-[0.5px]  border-neutral-500 rounded-md px-3 py-2 text-xs 
          `}
            placeholder={placeholder}
            onChange={onChange}
            ref={ref}
          />
        )}

        {error && (
          <div className="flex items-center text-xs w-full gap-x-1">
            <RiErrorWarningFill className="text-warning-700" />
            <span className="text-warning-700">{error}</span>
          </div>
        )}

        {warning && (
          <div className="flex items-center w-full gap-x-1 text-xs">
            <RiErrorWarningFill className="text-version3-400" />
            <span className="text-version3-400">{error}</span>
          </div>
        )}

        {success && (
          <div className="flex items-center w-full text-xs gap-x-1">
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
