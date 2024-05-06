import { User } from "@/app/types";
import Image from "next/image";
import React from "react";

interface Props {
  user: User;
  size: number;
}

export default function Avatar({ user, size }: Props) {
  return (
    <span>
      {user.photo ? (
        <Image alt="." width={size} height={size} src={user.photo} />
      ) : (
        <b>{user.name?.[0]}</b>
      )}
    </span>
  );
}
