import axios from "axios";

export async function getWods() {
  const response = await axios.get("/data/wods.json");
  return response.data;
}
