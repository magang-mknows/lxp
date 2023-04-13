import { MouseEventHandler } from "react";

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
