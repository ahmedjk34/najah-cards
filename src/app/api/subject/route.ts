import connectDB from "@/lib/connectDB";
import subjectModal from "@/models/subjectModal";
import Subject from "@/models/subjectModal";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const subjects = [
    {
      id: "c++",
      image: "https://i.ibb.co/j3v0DdK/cppLogo.png",
      title: "C++",
      description:
        "A general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.",
    },
    {
      id: "java",
      image: "https://i.ibb.co/vvtJcJ3/javaLogo.png",
      title: "Java",
      description:
        "A high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    },
    {
      id: "python",
      image: "https://i.ibb.co/wgLncfR/python-Logo.png",
      title: "Python",
      description:
        "An interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
    },
  ];
  await connectDB();
  for (let subject of subjects) {
    const exists = await subjectModal.findOne({ id: subject.id });
    if (!exists) {
      await subjectModal.create(subject);
    }
  }
}
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    //TODO: for now , we have three subjects so its oka to get all of them
    const subjects = await subjectModal.find({});
    return NextResponse.json(subjects);
  } catch (error) {
    return new NextResponse(`An error occurred : ${error}`, {
      status: 500,
    });
  }
}

// creating subjects :
// const subjects = [
//   {
//     id: "c++",
//     image: "https://i.ibb.co/j3v0DdK/cppLogo.png",
//     title: "C++",
//     description:
//       "A general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.",
//   },
//   {
//     id: "java",
//     image: "https://i.ibb.co/vvtJcJ3/javaLogo.png",
//     title: "Java",
//     description:
//       "A high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
//   },
//   {
//     id: "python",
//     image: "https://i.ibb.co/wgLncfR/python-Logo.png",
//     title: "Python",
//     description:
//       "An interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
//   },
// ];
// await connectDB();
// for (let subject of subjects) {
//   const exists = await Subject.findOne({ id: subject.id });
//   if (!exists) {
//     await Subject.create(subject);
//   }
// }
