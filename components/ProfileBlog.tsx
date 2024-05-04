"use client";
import { useAppSelector } from "@/redux/hooks";
import styles from "../styles/profile.module.scss";
import Image from "next/image";

const settings = {
  photoSize: 200,
  stores: ["posts", "followers", "follows"],
};

export default function ProfileBlog() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className={styles.profile}>
      <div className={styles.image}>
        {user.photo ? (
          <Image
            alt="."
            width={settings.photoSize}
            height={settings.photoSize}
            src={user.photo}
          />
        ) : (
          <b>{user.name?.[0]}</b>
        )}
      </div>
      <h1>{user.name}</h1>
      <div className={styles.line}>
        <span>
          <b>{user.posts ? user.posts.length : 0}</b>
          <p>Posts</p>
        </span>
        <span>
          <b>{user.followers ? user.followers.length : 0}</b>
          <p>Followers</p>
        </span>
        <span>
          <b>{user.follows ? user.follows.length : 0}</b>
          <p>Follows</p>
        </span>
      </div>
    </div>
  );
}
