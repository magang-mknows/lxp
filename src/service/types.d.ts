import { AxiosError } from "axios";
import { type } from "os";

export interface ICommonMetaResponse<T> {
  code?: number;
  status?: string;
  message?: string;
  data?: Array<T>;
}

export type TRegisterMetaResponse = {
  code: number;
  status: string;
  message: string;
};

export type TMetaErrorResponse = AxiosError<TMetaItem>;
