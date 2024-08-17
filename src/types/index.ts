export type GetResponse<T> = {
    status: string;
    message: string;
    data: T[];
};