import {useMutation} from '@tanstack/react-query';
import {MutationConfig} from '@/lib/react-query';
import {axios} from "@/lib/axios.ts";

export const putLike = ({postId}: { postId: number }) => {
    return axios.put(`/api/post/${postId}/like`);
};

type UsePutLikeOptions = {
    mutationConfig?: MutationConfig<typeof putLike>;
};

export const usePutLike = ({
                               mutationConfig,
                           }: UsePutLikeOptions = {}) => {

    return useMutation({
        ...mutationConfig,
        mutationFn: putLike,
    });
};