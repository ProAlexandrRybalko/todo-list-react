import axios from "axios";

export const deleteAccounting = (id: string) => axios.delete<string>("http://localhost:8000/deleteAccounting", 
    {
        data: { id }
    }
);
