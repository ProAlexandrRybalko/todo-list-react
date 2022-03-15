import { Dispatch, SetStateAction } from "react";

export interface AccType {
    where: string;
    date: Date;
    howMuch: number;
}

export interface AccTypeId extends AccType {
    _id: string;
}

export interface AccTypeSet extends AccTypeId {
    index: number;
}

export type AccountingsSum = {
    accountings: AccTypeId[];
    sum: number;
}