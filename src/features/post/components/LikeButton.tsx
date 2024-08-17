import heartIcon from "@/assets/heart.svg"
import filledHeartIcon from "@/assets/filledHeart.svg"
import {usePutLike} from "@/features/post";
import {useState} from "react";

interface LikeButtonProps {
    liked: boolean;
    postId: number
}

export const LikeButton = ({liked: initialLiked, postId}: LikeButtonProps) => {
    const [optimisticLiked, setOptimisticLiked] = useState(initialLiked);

    const updateLike = usePutLike({
        mutationConfig: {
            onMutate: async () => {
                setOptimisticLiked((prev) => !prev);
            },
            onError: () => {
                setOptimisticLiked((prev) => !prev);
            },
        },
    })
    const onLike = () => {
        updateLike.mutateAsync({postId})
    }

    return (
        <button onClick={onLike} className={'rounded-full bg-white/35 p-2 absolute top-4 right-4 z-10'}>
            <img src={optimisticLiked ? filledHeartIcon as string : heartIcon as string}
                 alt="like button"
            />
        </button>
    )
}