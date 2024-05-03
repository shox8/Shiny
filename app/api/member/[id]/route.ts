import { db } from "@/firebase.config";
import { verificator } from "@/utils/verificator";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  verificator(request);

  const user = await getDoc(doc(db, "users", params.id));

  return NextResponse.json(user.data());
}
