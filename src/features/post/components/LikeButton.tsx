import heartIcon from "@/assets/heart.svg"

export const LikeButton = () => {
    return (
        <button className={'rounded-full bg-red-500 p-2 absolute top-4 right-4'}><img src={heartIcon as string}/></button>
    )
}