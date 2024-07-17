"use server"; //important

import connectDB from "@/lib/connectDB";
import User from "@/models/userModel";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { signIn } from "@/auth";

const login = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const user = await User.findOne({ username });

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email: user?.email,
      password,
    });
  } catch (error) {
    const someError = error as CredentialsSignin;
    return someError.cause;
  }
  redirect("/");
};

const register = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  if (!username || !email || !password) {
    throw new Error("Please fill all fields");
  }

  await connectDB();

  // existing user
  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await hash(password, 12);

  await User.create({ username, email, password: hashedPassword });
  console.log(`User created successfully 🥂`);
  redirect("/");
};

const fetchAllUsers = async () => {
  await connectDB();
  const users = await User.find({});
  return users;
};

export { register, login, fetchAllUsers };
