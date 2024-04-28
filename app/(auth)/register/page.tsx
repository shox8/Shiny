"use client";
import React, { useState } from "react";
import { User } from "@/app/types";
import CustomInput from "@/components/Input";

export default function Register() {
  const [user, setUser] = useState<User>();

  function submit() {}

  return (
    <div>
      <form>
        <CustomInput label="Name" name="name" set={setUser} />
        <CustomInput label="Email" name="email" set={setUser} />
        <CustomInput label="Password" name="password" set={setUser} />
        <button type="button" onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
}
