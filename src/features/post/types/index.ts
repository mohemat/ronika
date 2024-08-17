import {GetResponse} from "@/types";

export type GetSectionType = {
    id: number;
    name: string;
};

export type GetSectionResponse = GetResponse<GetSectionType>;

export type TagType = {
    id: number;
    name: string;
};

export type GetPostType = {
    id: number;
    title: string;
    imgUrl: string;
    abstract: string;
    views: number;
    liked: boolean;
    section: GetSectionType;
    tags: TagType[];
};

export type GetPostsResponse = GetResponse<GetPostType>;
