import { Deck } from "@/Types";
import connectDB from "@/lib/connectDB";
import deckModel from "@/models/deckModel";
import subjectModel from "@/models/subjectModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { subjectId, author, description, title } = await request.json();
    const deckDocument: Deck = await deckModel.create({
      author,
      description,
      title,
    });
    const updatedSubject = await subjectModel.findByIdAndUpdate(
      subjectId,
      { $push: { decks: deckDocument._id } },
      { new: true } // To return the updated document
    );

    if (!updatedSubject) {
      throw new Error("Subject not found");
    }
    return new NextResponse("Success");
  } catch (error) {
    console.error("Error in POST function:", error);
    return new NextResponse("Error", { status: 500 });
  }
}
