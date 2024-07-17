import { Subject } from "@/Types";
import SubjectInfo from "@/components/SubjectPage/SubjectInfo";
import axios from "axios";
import React from "react";

type Props = {
  params: { id: string };
};
async function page({ params }: Props) {
  const response = await axios.get(
    `http://localhost:3000/api/subject/${params.id}`
  );
  const subject: Subject = response.data;
  //please handle errors properly

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ maxWidth: "1500px", padding: "2rem" }}>
        <SubjectInfo
          image={subject.image}
          title={subject.title}
          description={subject.description}
        />
      </div>
    </div>
  );
}

export default page;
