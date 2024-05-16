"use client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Home, Languages, Menu, Search, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button"
export default function Footer() {
    return (
        <footer className="bg-black" role="footer">
            <header className="flex items-center justify-between lg:flex-col lg:padding-[72px]">
                <div className="hidden lg:block">
                    <div className="text-white text-base flex items-center justify-start">Bạn có câu hỏi? Liên hệ với chúng tôi.</div>
                    <div className="grid grid-cols-4 gap-1 *:text-base">
                        <div className="text-white">Câu hỏi thường gặp</div>
                        <div className="text-white">Trung tâm trợ giúp</div>
                        <div className="text-white">Tài khoản</div>
                        <div className="text-white">Trung tâm đa phương tiện</div>
                        <div className="text-white">Quan hệ với nhà đầu tư</div>
                        <div className="text-white">Việc làm</div>
                        <div className="text-white">Các cách xem</div>
                        <div className="text-white">Điều khoản sử dụng</div>
                        <div className="text-white">Quyền riêng tư</div>
                        <div className="text-white">Tùy chọn cookie</div>
                        <div className="text-white">Thông tin doanh nghiệp</div>
                        <div className="text-white">Liên hệ với chúng tôi</div>
                        <div className="text-white">Kiểm tra tốc độ</div>
                        <div className="text-white">Thông báo pháp lý</div>
                        <div className="text-white">Chỉ có trên Netflix</div>
                    </div>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="bg-black flex items-center gap-1">
                                    <Languages color="white" size={21} className="hover:text-black" />
                                    <span className="text-white text-base hover:text-black">Tieng viet</span>
                                    <ChevronDown color="white" size={21} className="hover:text-black" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="">
                                {/* <DropdownMenuLabel>aaaaaaaaa</DropdownMenuLabel> */}
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <span className="text-base">English</span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div>
                        <p className="text-white mt-4">Netflix Việt Nam</p>
                    </div>
                </div>
                <div className="p-[16px_32px] w-full flex flex-row justify-between  lg:hidden">
                    <Home color="white" size={21} />
                    <Search color="white" size={21} />
                    <Menu color="white" size={21} />
                    <UserRound color="white" size={21} />
                </div>
            </header>
        </footer>
    );
}