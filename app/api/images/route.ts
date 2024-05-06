import { NextResponse } from "next/server";
import { storage } from "@/firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { $getId } from "dollar-kit";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("image");

  if (!file) {
    return NextResponse.json(
      { message: "No files received." },
      { status: 400 }
    );
  }

  if (!(file instanceof Blob)) {
    return NextResponse.json(
      { message: "Invalid file received." },
      { status: 400 }
    );
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const storageRef = ref(storage, $getId(10) + file.name);

  await uploadBytes(storageRef, buffer, {
    contentType: file.type
  });
  
  const url = await getDownloadURL(storageRef);

  return NextResponse.json({ url });
}
