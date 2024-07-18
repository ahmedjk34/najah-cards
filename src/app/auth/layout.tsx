"use client";
import React, { useRef, useState } from "react";
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
  const [error, setError] = useState<string>("");
  const formRef = useRef<HTMLFormElement | undefined>(undefined);

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      let formData = new FormData(formRef.current);
      const selectedAction = pathName.endsWith("login") ? login : register;
      //if there is an error message
      const errorMessage = await selectedAction(formData);
      setError(errorMessage);
    } catch (error: any) {}
  }

  return (
    <div className={styles.authPage}>
      <span></span>
      <form
        className={styles.modal}
        ref={formRef}
        onSubmit={async (e) => await submitForm(e)}
      >
        <span>{error}</span>
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

        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {children}
      </form>
    </div>
  );
}
