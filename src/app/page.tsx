import { auth } from "@/auth";
import Hero from "@/components/Home/Hero";
import SubjectCardsHolder from "@/components/Home/SubjectCardsHolder";
import React from "react";

type Props = {};

async function page({}: Props) {
  return (
    <>
      <Hero />
      <SubjectCardsHolder />
    </>
  );
}

export default page;
