import connectDB from "@/lib/connectDB";
import Subject from "@/models/subjectModal";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {}

//creating subjects :
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