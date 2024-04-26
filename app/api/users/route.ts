import { User } from "@/app/types";
import { db } from "@/firebase.config";
import { verificator } from "@/utils/verificator";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  let users: User[] = [];

  verificator(request);

  await getDocs(collection(db, "users")).then((response) => {
    response.docs.map((item) => users.push({ id: item.id, ...item.data() }));
  });

  return NextResponse.json(users);
}
