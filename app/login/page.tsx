"use client";
import React, { useEffect, useRef, useState } from "react";
import { User } from "@/app/types";
import { useLoginMutation } from "@/redux/services/auth";
import CustomInput from "@/components/Input";
import { useRouter } from "next/navigation";
import styles from "../../styles/auth.module.scss";
import { cursor } from "@/utils/cursor";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/Loader";

export default function Login() {
  const [user, setUser] = useState<User | any>();
  const [size, setSize] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginUser, data] = useLoginMutation();
  const route = useRouter();
  const effect = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement | any>(null);

  useEffect(() => {
    setIsLoading(data.status === "pending" ? true : false);
  }, [data]);

  useEffect(() => {
    setSize(form.current ? innerHeight - form.current?.offsetHeight - 60 : 0);
  }, [form.current]);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    await loginUser(user).unwrap();
    route.push("/");
  }

  cursor(effect);

  return (
    <div className={styles.register}>
      <Image
        src="/login.png"
        className={styles.image}
        width={size}
        height={size}
        alt="Picture of the author"
      />
      <div className={styles.effect} ref={effect}></div>
      <form onSubmit={submit} ref={form}>
        <h1>Log in</h1>
        <CustomInput
          type="email"
          label="Email"
          name="email"
          set={setUser}
          value={user.email}
          required
        />
        <CustomInput
          label="Password"
          name="password"
          set={setUser}
          eye={true}
          value={user.password}
          required
        />
        <kbd>
          Create an accaunt. <Link href={"/register"}>Register</Link>
        </kbd>
        <button className={styles.submitBtn} disabled={isLoading}>
          <Loader active={isLoading} /> Submit
        </button>
      </form>
    </div>
  );
}
