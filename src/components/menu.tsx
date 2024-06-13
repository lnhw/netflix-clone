"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { CiUser } from "react-icons/ci";
import { FaUserCog } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Languages,
  LogIn,
  LogOut,
  Settings,
  User,
  CircleHelp,
} from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

const Menu = () => {
  const { data: session } = useSession();

  return (
    <div data-testId="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {session?.user?.image ? (
            <Button
              className="relative flex items-center w-8 h-8 cursor-pointer rounded-full overflow-hidden"
              variant="secondary"
            >
              <Image
                className="object-cover"
                src={session?.user?.image as string}
                alt={session?.user?.name as string}
                fill
              />
            </Button>
          ) : (
            <Button
              className="w-8 h-8 cursor-pointer rounded-full overflow-hidden"
              variant="secondary"
            >
              <User className="w-8 h-8" color="black" size={32} />
            </Button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel data-testId="My Account">My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <FaUserCog className="mr-2 w-4 h-4" />
              <span>Quản lý tài khoản</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Languages className="mr-2 h-4 w-4" />
              <span>Languages</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Cài đặt</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CircleHelp className="mr-2 h-4 w-4" />
              <span>Trợ giúp</span>
            </DropdownMenuItem>
            {session ? (
              <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}
                data-testId="logout"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem onClick={() => signIn()} data-testId="login">
                <LogIn className="mr-2 h-4 w-4" />
                <span>Log In</span>
                <DropdownMenuShortcut>⇧⌘L</DropdownMenuShortcut>
              </DropdownMenuItem>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default Menu;
