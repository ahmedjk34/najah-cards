import connectDB from "@/lib/connectDB";
import deckModel from "@/models/deckModel";
import { MongooseError } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const deck = await deckModel.findById(params.id).populate("flashcards");
    if (!deck) {
      return new NextResponse("Deck not found", { status: 404 });
    }
    return NextResponse.json(deck);
  } catch (error) {
    const e = error as MongooseError;
    return new NextResponse(`ObjectID is invalid or Database is down`, {
      status: 500,
    });
  }
}
