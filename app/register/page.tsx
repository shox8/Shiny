"use client";
import React, { useEffect, useRef, useState } from "react";
import { User } from "@/app/types";
import { useRegisterMutation } from "@/redux/services/auth";
import { useRouter } from "next/navigation";
import { cursor } from "@/utils/cursor";
import CustomInput from "@/components/Input";
import styles from "../../styles/auth.module.scss";
import Link from "next/link";
import Loader from "@/components/Loader";
import Image from "next/image";

export default function Register() {
  const [user, setUser] = useState<User | any>();
  const [size, setSize] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [registerUser, data] = useRegisterMutation();
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
    await registerUser(user).unwrap();
    route.push("/");
  }

  cursor(effect);

  return (
    <div className={styles.register}>
      <div className={styles.effect} ref={effect}></div>
      <Image
        src="/register.png"
        className={styles.image}
        width={size}
        height={size}
        alt="Picture of the author"
      />
      <form onSubmit={submit} ref={form}>
        <h1>Register</h1>
        <CustomInput
          label="Name"
          name="name"
          set={setUser}
          value={user.name}
          required
        />
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
          Are you member? <Link href={"/login"}>Login</Link>
        </kbd>
        <button className={styles.submitBtn} disabled={isLoading}>
          <Loader active={isLoading} /> Submit
        </button>
      </form>
    </div>
  );
}
