"use client";
import React, { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Loader, Search, X } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
const sanitizeInput = (input: string): string => {
    //loai bo cac the HTML bang cach thay the chung bang ky tu escaped
    const tagBody = "(?:[^\"'>]|\"[^\"]*\"|'[^']*')*";
    const tagOrComment = new RegExp(
        "<(?:" +
        // Bắt đầu tag tên: <tag
        "!--(?:(?:-*[^->])*--+|-?)" +
        // Tiếp theo là các nội dung trong tag
        "|script\\b" +
        tagBody +
        ">[\\s\\S]*?</script\\s*" +
        "|style\\b" +
        tagBody +
        ">[\\s\\S]*?</style\\s*" +
        "|/?[a-z]" +
        tagBody +
        ")>",
        "gi"
    );
    let oldInput;
    do {
        oldInput = input;
        //loa bo cac tag khong an toan
        input = input.replace(tagOrComment, "");
    } while (input !== oldInput);
    //thay the thuc the HTML
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};
const SearchBar: React.FC = () => {
    // const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    // const { replace } = useRouter();
    const [searchQuery, setSearchQuery] = React.useState("");
    // console.log(searchQuery);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const typingTimeoutRef = useRef<number | null>(null);

    useEffect(() => {
        //Event xu ly animation input
        const inputElement = inputRef.current;
        if (inputElement) {
            inputElement.style.transition = "width 300ms ease-in-out";
            inputElement.style.width = isHovering ? "200px" : "0px";
        }
    }, [isHovering]);
    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        if (searchQuery === "") {
            setIsHovering(false);
        }
    };
    //xử lý input
    const handleSearchInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        // Gọi hàm xử lý tìm kiếm với từ khóa mới
        setSearchQuery(term);
        // Không cần gọi handleSearch ở đây vì đã gọi trong onChange của input
    }, []);
    const handleSearch = useDebouncedCallback((term: string, router: any) => {
        const safeInput = sanitizeInput(term);
        const params = new URLSearchParams(router.query);
        if (safeInput) {
            params.set("query", safeInput);
        } else {
            params.delete("query");
        }
        router.replace({
            pathname: router.pathname,
            query: params.toString() ? { query: params.toString() } : {},
        });
    }, 150);
    
    const handleClearSearch = () => {
        setSearchQuery("");
        setIsHovering(false);
        setIsTyping(false);
        if (inputRef.current) {
            inputRef.current.focus();   
        }
    };
    return (
        <div className="p-[2px] flex items-center bg-white rounded-full overflow-hidden">
            <form
                className=""
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex item-center">
                    <div className="">
                        <input
                            ref={inputRef}
                            className=" text-sm font-medium border-none outline-none pl-5 pr-6"
                            type="text"
                            value={searchQuery}
                            onChange={(event) => {
                                handleSearchInputChange(event);
                                // handleSearch(event.target.value, router);
                            }}
                            placeholder="Tim kiem"
                            style={{
                                width: 0,
                                opacity: isHovering ? 1 : 0,
                                paddingLeft: isHovering ? "24px" : 0,
                                paddingRight: isHovering ? "8px" : 0,
                            }}
                            defaultValue={searchParams?.get("query")?.toString()}
                        />
                    </div>
                    {searchQuery && (
                        <button
                            className=""
                            type="button"
                            role="buton"
                            onClick={handleClearSearch}
                        >
                            {isTyping ? (
                                <Loader
                                    className="hover:text-gray-500"
                                    color="black"
                                    size={18}
                                />
                            ) : (
                                <X className="hover:text-gray-500" color="black" size={18} />
                            )}
                        </button>
                    )}
                </div>
            </form>
            <button
                className="border-0 outline-none bg-white rounded-full p-1 cursor-pointer hover:bg-gray-100"
                role="button"
                onMouseEnter={() => setIsHovering(true)}
            >
                <Suspense>
                    <Search className="cursor-pointer" color="gray" size={20} />
                </Suspense>
            </button>
        </div>
    );
};
export default SearchBar;
