import {Input} from "@/components/form";
import {useSearch} from "@/features/post/api/getSearch.ts";
import {useEffect, useRef, useState} from "react";
import {useDebounce} from "@uidotdev/usehooks";
import {convertSearchParamsToQuery} from "@/utils";
import searchIcon from "@/assets/search.svg"

export const SearchPost = () => {
    const componentRef = useRef<HTMLDivElement | null>(null);
    const [search, setSearch] = useState("")
    const [showOverlay, setShowOverlay] = useState(false);
    const debounceSearch = useDebounce(JSON.stringify({search: search}), 500);
    const searchPost = useSearch({
        searchQueries: convertSearchParamsToQuery({
            q: JSON.parse(debounceSearch).search
        }), queryConfig: {enabled: false}
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                componentRef.current &&
                !componentRef.current?.contains(event.target as Node)
            ) {
                setShowOverlay(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (JSON.parse(debounceSearch).search.length > 1) {
            searchPost.refetch()
            setShowOverlay(true)
        }
    }, [debounceSearch]);

    const highlightText = (text: string, highlight: string) => {
        if (!highlight.trim()) {
            return text;
        }

        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <span>
                {parts.map((part, i) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <span key={i} className="text-primary">{part}</span>
                    ) : (
                        <span key={i}>{part}</span>
                    )
                )}
            </span>
        );
    };

    const clickSearchIcon = () => {
        setShowOverlay(true)
        searchPost.refetch()
    }

    return (
        <div ref={componentRef}>

            <form
                className={`flex w-[350px] sm:w-[400px] md:w-[600px] bg-white rounded-lg ${showOverlay && 'rounded-b-none'}`}
                onSubmit={handleSubmit}>

                <Input className={`mx-auto`}
                       onChange={(event) => setSearch(event.target.value)} placeholder={'جستجو'}/>
                <img onClick={clickSearchIcon} className={'me-4 cursor-pointer'} src={searchIcon as string}/>
            </form>
            {showOverlay && (
                <div
                    className="absolute w-[350px] sm:w-[400px] md:w-[600px]  bg-white shadow-lg rounded-b-lg border border-gray-200">
                    {searchPost.isLoading ? (
                        <div className="px-4 py-4 text-center text-sm">
                            درحال جستجو...
                        </div>
                    ) : (
                        <ul className="py-2">
                            {searchPost.data?.data && searchPost.data?.data.length > 0 ? (
                                searchPost.data?.data.map((post) => (
                                    <li
                                        key={post.id}
                                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <div className="flex items-center space-x-4 gap-4">
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">
                                                    {highlightText(post.title, search)}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <div className="px-4 py-2 text-center text-sm">
                                    پستی یافت نشد
                                </div>
                            )}
                        </ul>
                    )}
                </div>
            )}

        </div>


    )
}