import axios from "axios";
import { AccountingsSum } from "../../components/Accounting/AccountingsType";

export const getAllAccountings = () => axios.get<AccountingsSum>("http://localhost:8000/allAccountings");
