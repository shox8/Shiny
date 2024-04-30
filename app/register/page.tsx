"use client";
import React, { useRef, useState } from "react";
import { User } from "@/app/types";
import { useRegisterMutation } from "@/redux/services/auth";
import { useRouter } from "next/navigation";
import CustomInput from "@/components/Input";
import styles from "../../styles/auth.module.scss";
import { cursor } from "@/utils/cursor";
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

  cursor(effect);

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
