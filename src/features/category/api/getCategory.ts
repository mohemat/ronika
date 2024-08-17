import {queryOptions, useQuery} from '@tanstack/react-query';
import {QueryConfig} from '@/lib/react-query';
import {GetCategoryResponse} from "@/features/category";
import {axios} from "@/lib/axios";


export const getCategory = (): Promise<GetCategoryResponse> => {
    return axios.get(`/api/categories/`);
};

export const getCategoryQueryOptions = () => {
    return queryOptions({
        queryKey: ['category'],
        queryFn: () => getCategory(),
    });
};

type UseCategoryOptions = {
    queryConfig?: QueryConfig<typeof getCategoryQueryOptions>;
};

export const useCategory = ({queryConfig}: UseCategoryOptions) => {
    return useQuery({
        ...getCategoryQueryOptions(),
        ...queryConfig,
    });
};