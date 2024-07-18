"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./util.module.scss";
type Props = {};

function NotFound({}: Props) {
  const [countdown, setCountdown] = useState(3);
  const router = useRouter();
  useEffect(() => {
    if (countdown === 0) {
      router.push("/");
      return;
    }
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, router]);
  return (
    <div className={styles.notFound}>
      <h1>Page Not Found</h1>
      <p>You will be redirected in {countdown} seconds</p>
    </div>
  );
}

export default NotFound;
