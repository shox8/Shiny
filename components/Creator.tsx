import { useAppSelector } from "@/redux/hooks";
import styles from "../styles/creator.module.scss";
import Image from "next/image";

const settings = {
  photoSize: 40,
};

export default function Creator() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className={styles.creator}>
      <div className={styles.user}>
        <span>
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
        </span>
      </div>
    </div>
  );
}
