import { NextResponse } from "next/server";
import { z } from "zod";
import { appendRow } from "@/lib/googleSheets";

const schema = z.object({
  institution: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  capitalType: z.string().min(1),
  ticketSize: z.string().optional().default(""),
  preferredSectors: z.string().optional().default(""),
  preferredGeography: z.string().optional().default(""),
  preferredTenor: z.string().optional().default(""),
  additionalInfo: z.string().optional().default(""),
});

export async function POST(request: Request) {
  try {
    const body = schema.parse(await request.json());

    await appendRow("Capital Partners", [
      new Date().toISOString(),
      body.institution,
      body.name,
      body.role,
      body.email,
      body.phone,
      body.capitalType,
      body.ticketSize,
      body.preferredSectors,
      body.preferredGeography,
      body.preferredTenor,
      body.additionalInfo,
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
    }
    console.error("[capital-partner]", error);
    return NextResponse.json(
      { error: "We couldn't submit this right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
