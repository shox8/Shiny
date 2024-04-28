import { db } from "@/firebase.config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";
import { User } from "@/app/types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function emailInUse(email: string) {
  let data: User[] = [];

  await getDocs(collection(db, "users")).then((response) => {
    response.docs.map((item) => data.push({ id: item.id, ...item.data() }));
  });

  const user = data.find((item) => item.email === email);

  return user ? true : false;
}

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  if (!email || !password || !name) {
    return NextResponse.json(
      { message: "Fill in the required fields!" },
      { status: 400 }
    );
  }

  if (await emailInUse(email)) {
    return NextResponse.json(
      { message: "This email already in use!" },
      { status: 400 }
    );
  }

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  const user = await addDoc(collection(db, "users"), {
    name,
    email,
    password: hashed,
  });

  const secret = process.env.JWT_SECRET;

  if ((await emailInUse(email)) && secret) {
    return NextResponse.json({
      id: user.id,
      email,
      name,
      token: jwt.sign({ id: user.id }, secret, { expiresIn: "5d" }),
    });
  } else {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
