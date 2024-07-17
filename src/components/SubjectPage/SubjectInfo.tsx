import React from "react";
import styles from "./subject-page.module.scss";
type Props = {
  image: string;
  title: string;
  description: string;
};

function SubjectInfo({ image, title, description }: Props) {
  return (
    <div className={styles.subjectInfo}>
      <img src={image} alt={title}></img>
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </div>
  );
}

export default SubjectInfo;
