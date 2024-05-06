import { db } from "@/firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const post = await request.json();
  const data = await addDoc(collection(db, "posts"), post);

  return NextResponse.json({ id: data.id, ...post });
}
