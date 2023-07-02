const BASE_URL = "http://localhost:5000/names";

export const getAllNames = async () => {
  const response = await fetch(BASE_URL);
  console.log(response);
  return response.json();
};
