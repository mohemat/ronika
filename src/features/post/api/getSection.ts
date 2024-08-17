import {queryOptions, useQuery} from '@tanstack/react-query';
import {QueryConfig} from '@/lib/react-query';
import {GetSectionResponse} from "@/features/post";
import {axios} from "@/lib/axios";


export const getSection = (): Promise<GetSectionResponse> => {
    return axios.get(`/api/sections/`);
};

export const getSectionQueryOptions = () => {
    return queryOptions({
        queryKey: ['section'],
        queryFn: () => getSection(),
    });
};

type UseSectionOptions = {
    queryConfig?: QueryConfig<typeof getSectionQueryOptions>;
};

export const useSection = ({queryConfig}: UseSectionOptions) => {
    return useQuery({
        ...getSectionQueryOptions(),
        ...queryConfig,
    });
};