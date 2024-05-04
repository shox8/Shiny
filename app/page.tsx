"use client";
import { userId } from "./base";
import { useMemberQuery } from "@/redux/services/auth";
import { useEffect } from "react";
import styles from "../styles/layout.module.scss";
import Profile from "@/components/ProfileBlog";
import Navbar from "@/components/Navbar";

export default function Home() {
  useEffect(() => {
    const {} = useMemberQuery(userId || "");
  }, []);

  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.line}>
        <Profile />
      </div>
    </div>
  );
}
