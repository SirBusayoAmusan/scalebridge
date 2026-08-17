import { NextResponse } from "next/server";
import { z } from "zod";
import { appendRow } from "@/lib/googleSheets";

const schema = z.object({
  financingType: z.string().min(1),
  capitalRequirement: z.string().min(1),
  repaymentSource: z.string().min(10),
  counterparty: z.string().min(1),
  transactionStage: z.string().min(1),
  fullName: z.string().min(1),
  company: z.string().min(1),
  jobTitle: z.string().optional().default(""),
  email: z.string().email(),
  phone: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const rawPayload = formData.get("payload");
    if (typeof rawPayload !== "string") {
      return NextResponse.json({ error: "Missing form payload." }, { status: 400 });
    }

    const data = schema.parse(JSON.parse(rawPayload));

    // Document uploads are accepted and their filenames are recorded, but no
    // file storage backend (e.g. cloud storage) is configured yet — the
    // files themselves are not persisted. Wire up storage before relying on
    // this in production.
    const documentNames = formData
      .getAll("documents")
      .filter((entry): entry is File => entry instanceof File)
      .map((file) => file.name);

    await appendRow("Opportunities", [
      new Date().toISOString(),
      data.financingType,
      data.capitalRequirement,
      data.repaymentSource,
      data.counterparty,
      data.transactionStage,
      documentNames.join(", "),
      data.fullName,
      data.company,
      data.jobTitle,
      data.email,
      data.phone,
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
    }
    console.error("[submit-opportunity]", error);
    return NextResponse.json(
      { error: "We couldn't submit this right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
