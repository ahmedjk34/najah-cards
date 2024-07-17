import connectDB from "@/lib/connectDB";
import subjectModal from "@/models/subjectModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const subject = await subjectModal.findById(params.id);
    return NextResponse.json(subject);
  } catch (error) {
    return new NextResponse(`An error occurred : ${error}`, {
      status: 500,
    });
  }
}
