import axios from "axios";

export const changeAccounting = (id: string, inputWhere: string, inputHowMuch: number) => axios.patch<string>("http://localhost:8000/changeAccounting", 
    {
        id,
        data: { 
            where: inputWhere,
            howMuch: inputHowMuch 
        }
    }
);