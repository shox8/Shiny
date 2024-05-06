"use client";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { size } from "@/utils/size";
import { RxCross2 } from "react-icons/rx";
import { FaCloudUploadAlt } from "react-icons/fa";
import Photo from "./Photo";
import styles from "../styles/creator.module.scss";
import ui from "../styles/ui.module.scss";

const settings = {
  photoSize: 65,
};

interface Props {
  images: any[];
  setImages: Dispatch<SetStateAction<any[]>>;
}

export default function Uploader({ images, setImages }: Props) {
  const [disable, setDisable] = useState<boolean>(false);

  useEffect(() => {
    if (images.length == 3) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [images.length]);

  function upload(e: ChangeEvent<HTMLInputElement>) {
    if (!disable) {
      setImages((p) => [...p, e.target.files]);
    }
  }

  function remove(name: string) {
    setImages(images.filter((item) => item[0].name !== name));
  }

  return (
    <div className={styles.uploader}>
      <input
        type="file"
        id="image"
        disabled={disable}
        accept="image/*"
        onChange={(e) => upload(e)}
      />
      <label htmlFor="image">
        <FaCloudUploadAlt />
        <p>{disable ? "You can upload only 3 images!" : "Upload Images."}</p>
      </label>
      <div className={styles.list}>
        {images.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.item}>
              <Photo
                src={URL.createObjectURL(item[0])}
                x={settings.photoSize}
                y={settings.photoSize}
              />
              <h6 className="flex flex-col ml-3">
                <b>{item[0].name}</b>
                <b>{size(item[0].size)}</b>
              </h6>
            </div>
            <button className={ui.iconBtn} onClick={() => remove(item[0].name)}>
              <RxCross2 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
