import { MouseEventHandler, ReactNode } from "react";

export type TButtonProps = {
  type?: "primary" | "secondary";
  text: string;
  size?: "tiny" | "small" | "medium" | "large" | "extraLarge" | "full";
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
  icon?: ReactNode;
  isAvailable?: boolean;
  addtionalClass?: string;
  detailList?: Array<{ text: string; link?: string }>;
  link?: string;
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

export type TCrumbItem = {
  link: string;
  name: string;
};

export type TBreadCrumbProps = {
  items: CrumbItem[];
};

export type ModalProps = {
  title?: string;
  children: ReactNode;
  button?: ReactNode;
  hasButton?: boolean;
  hasImage?: boolean;
  lookup: boolean;
  withClose?: boolean;
  widthModal?: string;
  onClose?: MouseEventHandler<HTMLDivElement | HTMLSpanElement | SVGElement>;
};

export type DashedTextProps = {
  text?: string;
};

export interface CheckboxFieldProps {
  className?: string;
  labelClassName?: string;
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  label?: string;
  checked?: boolean;
  error?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  control: Control<any, T>;
}
