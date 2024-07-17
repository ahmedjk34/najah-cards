import React from "react";
import styles from "../auth.module.scss";
import Link from "next/link";

type Props = {};

function page({}: Props) {
  return (
    <>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <div className={styles.credentialsActionCenter}>
          <button>Sign Up</button>
          <Link href={"/auth/login"}>Already have an account?</Link>
        </div>
      </div>
    </>
  );
}

export default page;
