import styles from "../../../styles/layout.module.scss";
import Navbar from "@/components/Navbar";

export default function User() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.line}></div>
    </div>
  );
}
