import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./paths";
import { BodyType } from "./types";

type GenericObject = { [key: string]: any };

export const internalAPICallDo = async (
  path: string,
  body: GenericObject,
  headers?: GenericObject
): Promise<AxiosResponse<BodyType<any>, any>> => {
  try {
    const url = `${BASE_URL}/${path}`;
    return await axios.post(url, body, { headers });
  } catch (err) {
    console.log("Error on Axios call: ", err);
    throw new Error("Unexpected error");
  }
};
