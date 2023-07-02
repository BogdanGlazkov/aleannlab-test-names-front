import axios from "axios";
import { NameDto } from "./dto/names.dto";

axios.defaults.baseURL = "http://localhost:5000/names";

export const getNames = async () => {
  try {
    const { data } = await axios.get("/");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createName = async (
  name: string
): Promise<NameDto | undefined> => {
  try {
    const { data } = await axios.post("/", { name });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editName = async (
  id: number,
  name: string
): Promise<NameDto | undefined> => {
  try {
    const { data } = await axios.put(`/${id}`, { name });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteName = async (id: number): Promise<void> => {
  try {
    await axios.delete(`/${id}`);
  } catch (error) {
    console.log(error);
  }
};
