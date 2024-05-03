"use client";
import { User } from "@/app/types";
import React, { Dispatch, SetStateAction, useState } from "react";
import { RiEyeCloseFill } from "react-icons/ri";
import { HiMiniEye } from "react-icons/hi2";

interface Props {
  type?: string;
  ph?: string;
  label?: string;
  name?: string;
  required?: boolean;
  eye?: boolean;
  set: Dispatch<SetStateAction<User | undefined>>;
}

export default function CustomInput({
  type = "text",
  ph,
  label,
  name,
  required = true,
  eye,
  set,
}: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-[2px] mt-1">
      {label ? <label htmlFor={name}>{label}</label> : ""}
      {eye ? (
        <span className="flex gap-2">
          <input
            type={open ? type : "password"}
            name={name}
            placeholder={ph}
            id={name}
            required={required}
            className="w-[90%]"
            onChange={(e) =>
              set((prevent) => ({
                ...prevent,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="h-[40px] w-[15%] rounded-[10px] bg-[#76ABAE] flex justify-center items-center active:bg-[#638e91] active:scale-[0.95] text-black"
          >
            {open ? <HiMiniEye /> : <RiEyeCloseFill />}
          </button>
        </span>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={ph}
          id={name}
          required={required}
          onChange={(e) =>
            set((prevent) => ({ ...prevent, [e.target.name]: e.target.value }))
          }
        />
      )}
    </div>
  );
}
