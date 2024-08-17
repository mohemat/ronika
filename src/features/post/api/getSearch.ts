import {queryOptions, useQuery} from '@tanstack/react-query';
import {QueryConfig} from '@/lib/react-query';
import {GetPostsResponse} from "@/features/post";
import {axios} from "@/lib/axios";


export const getSearch = ({
                               searchQueries = "",
                           }): Promise<GetPostsResponse> => {
    return axios.get(`/api/search?${searchQueries}`);
};

export const getSearchQueryOptions = ({searchQueries = ""}) => {
    return queryOptions({
        queryKey: ['search', searchQueries],
        queryFn: () => getSearch({searchQueries}),
    });
};

type UseSearchOptions = {
    searchQueries?: string;
    queryConfig?: QueryConfig<typeof getSearchQueryOptions>;
};

export const useSearch = ({
                               queryConfig,
                               searchQueries = "",
                           }: UseSearchOptions) => {
    return useQuery({
        ...getSearchQueryOptions({searchQueries}),
        ...queryConfig,
    });
};