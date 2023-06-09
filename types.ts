export type UnionType = string | number | null;
export type ParamType = { [key: string]: UnionType };

export type BodyType<T> = {
  code: 0 | 1;
  errmsg: string;
  result: T[];
};

export type ResponseType<T> = Promise<{
  statusCode: number;
  headers?: {
    access_token?: string;
    refresh_token?: string;
  };
  body: BodyType<T>;
}>;