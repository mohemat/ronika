import {useMutation} from '@tanstack/react-query';
import {MutationConfig} from '@/lib/react-query';
import {axios} from "@/lib/axios.ts";

type CreateContactUsDTO = {
    data: {
        fullname: string;
        email: string;
        message: string;
    };
};


export const createContactUs = ({data}: CreateContactUsDTO) => {
    return axios.post(`/api/contact`, data);
};

type UseCreateContactUsOptions = {
    mutationConfig?: MutationConfig<typeof createContactUs>;
};

export const useCreateContactUs = ({mutationConfig}: UseCreateContactUsOptions = {}) => {
    return useMutation({
        ...mutationConfig,
        mutationFn: createContactUs,
    });
};