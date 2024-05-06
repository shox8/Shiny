import Image from "next/image";
import styles from "../styles/creator.module.scss";

interface Props {
  src: any;
  x: number;
  y: number;
}

export default function Photo({ src, x, y }: Props) {
  return (
    <span className={styles.photo}>
      <Image src={src} width={x} height={y} alt="." />
      <Image src={src} width={x} height={y} alt="." />
    </span>
  );
}
