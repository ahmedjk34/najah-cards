import { Subject } from "@/Types";
import axios from "axios";
import SubjectCard from "../SubjectCard/SubjectCard";
import styles from "./home.module.scss";

async function SubjectCardsHolder() {
  let subjects: Subject[] = [];
  try {
    const response = await axios.get("http://localhost:3000/api/subject");
    subjects = response.data;
  } catch (error) {
    console.error("Error fetching subjects:", error);
  }

  return (
    <div className={styles.subjectCardsHolder}>
      <h1>Our Main Subjects</h1>
      {subjects.length > 0 ? (
        subjects.map((subject) => (
          <SubjectCard
            subject={subject}
            key={"subject" + subject._id}
          ></SubjectCard>
        ))
      ) : (
        <div>No subjects available</div>
      )}
    </div>
  );
}

export default SubjectCardsHolder;
