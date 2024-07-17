import React from "react";
import styles from "../auth.module.scss";
import Link from "next/link";

type Props = {};

function page({}: Props) {
  return (
    <>
      <div className={styles.credentialsActionCenter}>
        <button>Login</button>
        <Link href={"/auth/signup"}>You don't have an account?</Link>
      </div>
    </>
  );
}

export default page;
