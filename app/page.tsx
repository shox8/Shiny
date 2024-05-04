"use client";
import styles from "../styles/layout.module.scss";
import Profile from "@/components/ProfileBlog";
import Navbar from "@/components/Navbar";
import { userId } from "./base";
import { useMemberQuery } from "@/redux/services/auth";

export default function Home() {
  const {} = useMemberQuery(localStorage.getItem(userId) || "");

  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.line}>
        <Profile />
      </div>
    </div>
  );
}
