import connectDB from "@/lib/connectDB";
import subjectModal from "@/models/subjectModel";
import { MongooseError } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const subject = await subjectModal.findById(params.id);
    if (!subject) {
      return new NextResponse("Subject not found", { status: 404 });
    }
    return NextResponse.json(subject);
  } catch (error) {
    const e = error as MongooseError;
    return new NextResponse(`ObjectID is invalid or Database is down`, {
      status: 500,
    });
  }
}
