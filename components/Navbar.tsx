"use client"
import Image from "next/image";
import styles from "../styles/navbar.module.scss";
import ui from "../styles/ui.module.scss";
import { key, title } from "@/app/base";
import { CgPentagonUp } from "react-icons/cg";
import Link from "next/link";

const settings = {
  logoSize: 50,
  webName: "Shiny",
};

export default function Navbar() {
  function leave() {
    localStorage.removeItem(key);
  }

  return (
    <div className={styles.navbar}>
      <Link href={"/"} className={styles.combines}>
        <Image
          src="/login.png"
          width={settings.logoSize}
          height={settings.logoSize}
          alt="."
        />
        <h1 className={title.className}>{settings.webName}</h1>
      </Link>
      <input className={ui.searchInput} placeholder="Search" />
      <div className={styles.combines}>
        <button className={ui.iconBtn}>
          <CgPentagonUp />
        </button>
        <button className={ui.btn} onClick={leave}>
          Log out
        </button>
      </div>
    </div>
  );
}
