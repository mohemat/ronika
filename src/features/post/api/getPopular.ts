import {queryOptions, useQuery} from '@tanstack/react-query';
import {QueryConfig} from '@/lib/react-query';
import {GetPostsResponse} from "@/features/post";
import {axios} from "@/lib/axios";


export const getPopular = ({
                               searchQueries = "",
                           }): Promise<GetPostsResponse> => {
    return axios.get(`/api/popular?${searchQueries}`);
};

export const getPopularQueryOptions = ({searchQueries = ""}) => {
    return queryOptions({
        queryKey: ['post', searchQueries],
        queryFn: () => getPopular({searchQueries}),
    });
};

type UsePopularOptions = {
    searchQueries?: string;
    queryConfig?: QueryConfig<typeof getPopularQueryOptions>;
};

export const usePopular = ({
                                queryConfig,
                                searchQueries = "",
                            }: UsePopularOptions) => {
    return useQuery({
        ...getPopularQueryOptions({searchQueries}),
        ...queryConfig,
    });
};