export interface IMetaResponse<T> {
  code?: number;
  status?: string;
  message?: string;
  data?: Array<T>;
}
