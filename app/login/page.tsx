"use client";
import React, { useRef, useState } from "react";
import { User } from "@/app/types";
import { useLoginMutation } from "@/redux/services/auth";
import CustomInput from "@/components/Input";
import { useRouter } from "next/navigation";
import styles from "../../styles/auth.module.scss";

export default function Login() {
  const [user, setUser] = useState<User | any>();
  const [loginUser] = useLoginMutation();
  const route = useRouter();
  const effect = useRef<HTMLDivElement>(null);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    await loginUser(user).unwrap();
    route.push("/");
  }

  return (
    <div className={styles.register}>
      <div className={styles.effect} ref={effect}></div>
      <form onSubmit={submit}>
        <h1>Login</h1>
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
          required
          eye={true}
        />
        <button className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
}
