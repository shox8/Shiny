"use client";
import React, { useRef, useState } from "react";
import { User } from "@/app/types";
import { useRegisterMutation } from "@/redux/services/auth";
import { useRouter } from "next/navigation";
import CustomInput from "@/components/Input";
import styles from "../../styles/auth.module.scss";
import Link from "next/link";

export default function Register() {
  const [user, setUser] = useState<User | any>();
  const [registerUser] = useRegisterMutation();
  const route = useRouter();
  const effect = useRef<HTMLDivElement>(null);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    await registerUser(user).unwrap();
    route.push("/");
  }

  document.addEventListener("mousemove", (e: MouseEvent) => {
    const { x, y } = e;
    const w = x < innerWidth / 2 ? x : innerWidth - x;
    const h = y < innerHeight / 2 ? y : innerHeight - y;

    if (effect.current) {
      effect.current.style.top = `${y}px`;
      effect.current.style.left = `${x}px`;
      effect.current.style.width = `${Math.min(w, h)}px`;
      effect.current.style.height = `${Math.min(w, h)}px`;
    }
  });

  return (
    <div className={styles.register}>
      <div className={styles.effect} ref={effect}></div>
      <form onSubmit={submit}>
        <h1>Register</h1>
        <CustomInput label="Name" name="name" set={setUser} required />
        <CustomInput
          type="email"
          label="Email"
          name="email"
          set={setUser}
          required
        />
        <CustomInput
          label="Password"
          name="password"
          set={setUser}
          eye={true}
          required
        />
        <kbd>
          Are you member? <Link href={"/login"}>Login</Link>
        </kbd>
        <button className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
}
