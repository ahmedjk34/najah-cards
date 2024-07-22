import connectDB from "@/lib/connectDB";
import deckModel from "@/models/deckModel";
import subjectModel from "@/models/subjectModel";
import { MongooseError } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const searchParams = request.nextUrl.searchParams;
    let page = parseInt(searchParams.get("page") ?? "1");

    //! handle if number of pages is more than the said amount , and less than 1
    await connectDB();
    const subject = await subjectModel.findById(params.id);
    if (!subject) {
      return new NextResponse("Subject not found", { status: 404 });
    }
    const numberOfPages = Math.floor(subject.decks.length / 10);
    if (page < 1) page = 1;
    else if (page > numberOfPages) page = 1;
    const decks = await deckModel
      .find({ _id: { $in: subject.decks } })
      .populate("author")
      .skip((page - 1) * 10)
      .limit(10);
    subject.decks = decks;

    //we also return the number of pages to handle the pages logic
    return NextResponse.json({ subject, numberOfPages });
  } catch (error) {
    const e = error as MongooseError;
    console.log(e);
    return new NextResponse(`ObjectID is invalid or Database is down`, {
      status: 500,
    });
  }
}
