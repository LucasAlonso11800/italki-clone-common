import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { BASE_URL } from "./paths";
import { BodyType, ParamType } from "./types";

type Options = {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: ParamType;
  headers?: ParamType;
};

export const internalAPICallDo = async (
  options: Options
): Promise<AxiosResponse<BodyType<any>, any>> => {
  try {
    const url = `${BASE_URL}/${options.path}`;
    return await axios({ ...options, url });
  } catch (err) {
    console.log("Error on Axios call: ", err);
    throw new Error("Unexpected error");
  }
};
