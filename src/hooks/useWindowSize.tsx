
"use client";
import { useEffect, useState } from "react"

export const useWindowSize = () => {
    const [size, setSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });
    useEffect(() => {
        // Kiểm tra trước khi sử dụng window để tránh lỗi khi code chạy server-side
        if (typeof window !== 'undefined') {
            // Hàm cập nhật kích thước cửa sổ
            const handleResize = () => {
                setSize({ width: window.innerWidth, height: window.innerHeight });
            };

            // Cập nhật kích thước khi component mount
            handleResize();

            // Thiết lập sự kiện resize
            window.addEventListener('resize', handleResize);

            // Dọn dẹp khi component unmount
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []); // Chỉ chạy một lần sau khi component mount

    return size;
}