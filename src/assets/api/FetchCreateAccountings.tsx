import axios from "axios";
import { AccType, AccTypeId } from "../../components/Accounting/AccountingsType";

export const createAccounting = ({ where, date, howMuch }: AccType) => axios.post<AccTypeId>("http://localhost:8000/createAccountings", 
    {
        where, 
        date, 
        howMuch
    }
);

