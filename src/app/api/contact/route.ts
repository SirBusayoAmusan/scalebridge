import { NextResponse } from "next/server";
import { z } from "zod";
import { appendRow } from "@/lib/googleSheets";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = schema.parse(await request.json());

    await appendRow("Contact", [
      new Date().toISOString(),
      body.name,
      body.email,
      body.subject,
      body.message,
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
    }
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "We couldn't send this right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
