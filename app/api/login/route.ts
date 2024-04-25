import { db } from "@/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";
import { User } from "@/app/types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function findUser(email: string) {
  let data: User[] = [];

  await getDocs(collection(db, "users")).then((response) => {
    response.docs.map((item) => data.push({ id: item.id, ...item.data() }));
  });

  return data.find((item) => item.email === email);
}

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Fill in the required fields!" },
      { status: 400 }
    );
  }

  const user = await findUser(email);

  const isPasswordCorrect =
    user && (await bcrypt.compare(password, user.password));

  const secret = process.env.JWT_SECRET;

  if (user && isPasswordCorrect && secret) {
    return NextResponse.json({
      id: user.id,
      email,
      name: user.name,
      token: jwt.sign({ id: user.id }, secret, { expiresIn: "5d" }),
    });
  } else {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
