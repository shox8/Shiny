import { TbLoader } from "react-icons/tb";
import styles from "../styles/ui.module.scss";

export default function Loader({ active }: { active: boolean }) {
  return active ? <TbLoader className={styles.loader} /> : "";
}
