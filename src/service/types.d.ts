export interface ICommonMetaResponse<T> {
  code?: number;
  status?: string;
  message?: string;
  data?: Array<T>;
}
