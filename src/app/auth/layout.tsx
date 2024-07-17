"use client";
import React, { useState } from "react";
import styles from "./auth.module.scss";
import { usePathname } from "next/navigation";
import { login, register } from "@/actions/user";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const pathName = usePathname();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    usernameError: string | null;
    passwordError: string | null;
  }>({
    usernameError: null,
    passwordError: null,
  });

  return (
    <div className={styles.authPage}>
      <span></span>
      <form
        className={styles.modal}
        action={pathName.endsWith("login") ? login : register}
        onSubmit={(e) => {
          e.preventDefault();
          if (password.length < 5) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              passwordError: "The password is too short",
            }));
          }
          if (username.length < 5) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              usernameError: "Username is too short",
            }));
          }
        }}
      >
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <span>{errors.usernameError}</span>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>{errors.passwordError}</span>
        </div>
        {children}
      </form>
    </div>
  );
}
