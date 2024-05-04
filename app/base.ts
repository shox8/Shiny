import { Nunito } from "next/font/google";

export const token: string = "token";

export const userIdKey: string = "userId";

export const userId: any =
  typeof window !== "undefined" ? localStorage.getItem(userIdKey) : "";

export const title = Nunito({ subsets: ["latin"] });
