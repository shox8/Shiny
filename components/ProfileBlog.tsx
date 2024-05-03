"use client";
import { useAppSelector } from "@/redux/hooks";
import styles from "../styles/profile.module.scss";

export default function ProfileBlog() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className={styles.profile}>
      <div className={styles.image}></div>
      <h1>{user.name}</h1>
    </div>
  );
}
