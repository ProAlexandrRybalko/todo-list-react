import axios from "axios";

export const getSum = () => axios.delete<number>("http://localhost:8000/getSum");
