import { ReactNode } from "react";

export type TButtonProps = {
  type: "primary" | "secondary";
  text: string;
  size: "tiny" | "small" | "medium" | "large" | "extraLarge" | "full";
  icon?: ReactNode;
};

export type TImageIDProps = {
  id: number;
  date?: string;
};

export type TCardContentProps = {
  title?: string;
  subTitle?: string;
  desc?: string;
  srcImg?: string;
};
export interface TextFieldProps {
  type: HTMLInputTypeAttribute;
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  value?: string;
  className?: string;
  labelClassName?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  ref?: RefObject;
  success?: string;
  warning?: string;
  hasLabel?: boolean;
  control: Control<any, T>;
  isTextArea?: boolean;
}

export interface FormProps {
  className?: string;
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
