import { MouseEventHandler, ReactNode } from "react";

export type TButtonProps = {
  type?: "primary" | "secondary";
  text: string;
  size?: "tiny" | "small" | "medium" | "large" | "extraLarge" | "full";
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  iconPosition?: "left" | "right";
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
  list?: Array<string>;
  link?: string;
};

export type TDrillSimulationPopup = {
  type: "sent" | "pending" | "finished";
  title: string;
  children: ReactNode;
};
export type CardAssigment = {
  titleAssigment: string;
  category: string;
  date?: string;
  time?: string;
  titleCourse: string;
  bgLine?: string;
  classNameCategory?: string;
  imgAssigment?: StaticImageData;
  alt?: string;
};
export interface CardProps {
  className?: string;
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
  titleStyle?: string;
  imgwidth?: number;
  imgheight?: number;
  src?: StaticImport;
  topText?: string;
  hasImage: boolean;
  href?: string;
  imgStyle?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
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
  textAreaSize?: "small" | "medium";
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

export interface UploadFieldProps {
  multiple?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name: string;
  className?: string;
  error?: string;
  success?: string;
  warning?: string;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  hasLabel?: boolean;
  ref?: Ref<HTMLInputElement>;
  files?: string;
  value?: string;
  accepted?: string;
  control?: Control<any, T>;
  onDrop?: (acceptedFiles: any) => void;
  path?: File;
  type?: string;
}

export type TProgressCardProps = {
  topic: string;
  milestone: string;
  title: string;
  totalClass: number;
  classAttended: number;
  percentage: number;
};

export type TEventCardProps = {
  isOrder: boolean;
};

export type TDiscussinCardProps = {
  hasImage: boolean;
  text: string;
  imgSource?: string;
  userName: string;
  title: string;
  time: string;
  type: string;
  children: ReactNode;
  countLikes: number;
};

export interface PopupProfilProps {
  id?: string;
  img: string;
  score: number;
  lookup?: boolean;
  name: string;
  index?: string | number;
  stylePopup?: string;
  widthModal?: string;
  onClose?: MouseEventHandler<HTMLDivElement | HTMLSpanElement>;
}
