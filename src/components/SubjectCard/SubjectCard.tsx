"use client";
import React from "react";
import styles from "./subject-card.module.scss";
import { Subject } from "@/Types";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
type Props = {
  subject: Subject;
};
const SubjectCard = ({ subject }: Props) => {
  const router = useRouter();
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
      onClick={() => router.push(`/subject/${subject._id}`)}
    >
      <img src={subject.image} alt={subject.title}></img>
      <div>
        <h2>{subject.title}</h2>
        <p>{subject.description}</p>
      </div>
      <div></div>
    </motion.div>
  );
};

export default SubjectCard;
