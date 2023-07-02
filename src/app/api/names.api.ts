import axios from "axios";
import { NameDto } from "./dto/names.dto";

axios.defaults.baseURL = "http://localhost:5000/names";

export const getNames = async () => {
  const { data } = await axios.get("/");
  return data;
};

export const createName = async (name: string): Promise<NameDto> => {
  const { data } = await axios.post("/", { name });
  return data;
};
