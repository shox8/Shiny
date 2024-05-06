"use client";
import { FormEvent, useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { Post } from "@/app/types";
import { usePostMutation, useUploadMutation } from "@/redux/services/posts";
import Avatar from "./Avatar";
import CustomInput from "./Input";
import Uploader from "./Uploader";
import styles from "../styles/creator.module.scss";
import ui from "../styles/ui.module.scss";

const settings = {
  photoSize: 40,
  inputWidth: "calc(100% - 80px)",
};

export default function Creator() {
  const { user } = useAppSelector((state) => state.auth);
  const [state, setState] = useState<Post | any>({ title: "", images: [] });
  const [images, setImages] = useState<any[]>([]);
  const [upload] = useUploadMutation();
  const [postData] = usePostMutation();

  useEffect(() => {
    if (state.images.length !== 0 && state.images.length === images.length) {
      handle();
      setState({ title: "", images: [] });
      setImages([]);
    }
  }, [state]);

  async function handle() {
    await postData(state).unwrap();
  }

  function share(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (images.length !== 0) {
      images.map(async (item) => {
        const data = new FormData();
        data.append("image", item[0]);
        const { url } = await upload(data).unwrap();
        setState((p: any) => ({ ...p, images: [...p.images, url] }));
      });
    }
  }

  return (
    <div className={styles.creator}>
      <div className={styles.line}>
        <Avatar user={user} size={settings.photoSize} />
        <form onSubmit={(e) => share(e)}>
          <CustomInput
            name="title"
            set={setState}
            ph="Title"
            value={state.title}
            w={settings.inputWidth}
          />
          <button className={ui.btn}>Share</button>
        </form>
      </div>
      <Uploader images={images} setImages={setImages} />
    </div>
  );
}
