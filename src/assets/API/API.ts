import axios from "axios";

const url: string = "http://localhost:2222";

export const createGoal = async (data: {}) => {
  return await axios.post(`${url}/create-goal`, { data }).then((res) => {
    return res.data;
  });
};
export const readGoal = async () => {
  return await axios.get(`${url}/get-all-goal`).then((res) => {
    return res.data;
  });
};
export const readOneGoal = async () => {
  return await axios.get(`${url}/get-all-goal`).then((res) => {
    return res.data;
  });
};
