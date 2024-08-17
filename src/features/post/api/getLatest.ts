import {queryOptions, useQuery} from '@tanstack/react-query';
import {QueryConfig} from '@/lib/react-query';
import {GetPostsResponse} from "@/features/post";
import {axios} from "@/lib/axios";


export const getLatest = (): Promise<GetPostsResponse> => {
    return axios.get(`/api/latest/`);
};

export const getLatestQueryOptions = () => {
    return queryOptions({
        queryKey: ['post'],
        queryFn: () => getLatest(),
    });
};

type UseLatestOptions = {
    queryConfig?: QueryConfig<typeof getLatestQueryOptions>;
};

export const useLatest = ({queryConfig}: UseLatestOptions) => {
    return useQuery({
        ...getLatestQueryOptions(),
        ...queryConfig,
    });
};