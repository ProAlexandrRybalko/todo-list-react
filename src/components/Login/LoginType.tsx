import { Dispatch, SetStateAction } from "react";

type setTokenType = {
    setToken: Dispatch<SetStateAction<string>>;
}

export default setTokenType;