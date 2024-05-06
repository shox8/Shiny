"use client";
import { Post, User } from "@/app/types";
import React, { Dispatch, SetStateAction, useState } from "react";
import { RiEyeCloseFill } from "react-icons/ri";
import { HiMiniEye } from "react-icons/hi2";
import ui from "../styles/ui.module.scss";

interface Props {
  type?: string;
  ph?: string;
  label?: string;
  name?: string;
  required?: boolean;
  eye?: boolean;
  className?: string;
  w?: string;
  value: string;
  set: Dispatch<SetStateAction<User | Post | undefined>>;
}

export default function CustomInput({
  type = "text",
  ph,
  label,
  name,
  required = true,
  eye,
  className,
  w,
  set,
  value,
}: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-[2px]" style={{ width: w }}>
      {label ? <label htmlFor={name}>{label}</label> : ""}
      {eye ? (
        <span className="flex gap-2">
          <input
            type={open ? type : "password"}
            name={name}
            placeholder={ph}
            id={name}
            required={required}
            className={`${ui.input} ${className} w-[90%]`}
            value={value}
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
            className="h-[40px] w-[40px] rounded-[10px] bg-[#76ABAE] flex justify-center items-center active:bg-[#638e91] active:scale-[0.95] text-black"
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
          className={`${ui.input} ${className}`}
          value={value}
          onChange={(e) =>
            set((prevent) => ({ ...prevent, [e.target.name]: e.target.value }))
          }
        />
      )}
    </div>
  );
}
