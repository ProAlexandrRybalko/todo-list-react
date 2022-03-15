import { SagaReturnType } from "redux-saga/effects";
import { getAllAccountings } from "../assets/api/FetchAllAccountings";

export type allAccountingsResponse = SagaReturnType<typeof getAllAccountings>