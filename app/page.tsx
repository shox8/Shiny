"use client";
import { useEffect } from "react";
import styles from "../styles/layout.module.scss";
import Profile from "@/components/ProfileBlog";
import Navbar from "@/components/Navbar";
import { userId } from "./base";
import { useMemberQuery } from "@/redux/services/auth";

export default function Home() {
  const id = localStorage.getItem(userId);
  const {} = useMemberQuery(id || "");

  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.line}>
        <Profile />
      </div>
    </div>
  );
}
