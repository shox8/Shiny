"use client";
import React, { useState } from "react";
import { User } from "@/app/types";
import { useRegisterMutation } from "@/redux/services/auth";
import CustomInput from "@/components/Input";
import { useRouter } from "next/navigation";

export default function Register() {
  const [user, setUser] = useState<User | any>();
  const [registerUser] = useRegisterMutation();
  const route = useRouter();

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    await registerUser(user).unwrap();
    route.push("/")
  }

  return (
    <div>
      <form onSubmit={submit}>
        <CustomInput label="Name" name="name" set={setUser} required />
        <CustomInput
          type="email"
          label="Email"
          name="email"
          set={setUser}
          required
        />
        <CustomInput label="Password" name="password" set={setUser} required />
        <button>Submit</button>
      </form>
    </div>
  );
}
