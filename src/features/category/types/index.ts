import {GetResponse} from "@/types";

export type GetCategoryType = {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
};

export type GetCategoryResponse = GetResponse<GetCategoryType>;
