"use client";
import { useAppSelector } from "@/redux/hooks";
import styles from "../styles/profile.module.scss";
import Avatar from "./Avatar";

const settings = {
  photoSize: 200,
};

export default function ProfileBlog() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className={styles.profile}>
      <div className={styles.image}>
        <Avatar user={user} size={settings.photoSize} />
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
