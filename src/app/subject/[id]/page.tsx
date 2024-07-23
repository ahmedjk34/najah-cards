import { Subject } from "@/Types";
import SubjectInfo from "@/components/SubjectPage/SubjectInfo";
import DeckHolder from "@/components/SubjectPage/DeckHolder";
import axios from "axios";
import { notFound } from "next/navigation";
import React from "react";
import PageNumbersHolder from "@/components/SubjectPage/PageNumbersHolder";

type Props = {
  params: { id: string };
  searchParams: { page?: string };
};

async function page({ params, searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  try {
    const response = await axios.get(
      `http://localhost:3000/api/subject/${params.id}?page=${page}`
    );
    const {
      subject,
      numberOfPages,
    }: { subject: Subject; numberOfPages: number } = response.data;
    if (!subject) {
      throw new Error("Subject not found");
    }
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "calc(100dvh - 10rem)",
        }}
      >
        <div style={{ maxWidth: "1500px", padding: "2rem" }}>
          <SubjectInfo
            image={subject.image}
            title={subject.title}
            description={subject.description}
          />
          <DeckHolder decks={subject.decks} />
          <PageNumbersHolder numberOfPages={numberOfPages}></PageNumbersHolder>
        </div>
      </div>
    );
  } catch (error: any) {
    notFound();
  }
}

export default page;
