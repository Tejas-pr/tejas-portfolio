import { NextResponse } from "next/server";
import { resumeConfig } from "@/config/Resume";

// Always fetch fresh from Google — never let this route (or a CDN in front
// of it) cache a stale PDF snapshot of the resume doc.
export const dynamic = "force-dynamic";

// Streams a freshly generated PDF export of the resume Google Doc, so the
// download always matches whatever is currently in the doc — no manual
// re-export/re-upload step required.
export async function GET() {
    const exportUrl = `https://docs.google.com/document/d/${resumeConfig.docId}/export?format=pdf`;

    try {
        const response = await fetch(exportUrl, { cache: "no-store" });

        if (!response.ok) {
            throw new Error(`Failed to export resume doc: ${response.status}`);
        }

        const buffer = await response.arrayBuffer();
        const headers = new Headers();
        headers.set("Content-Type", "application/pdf");
        headers.set(
            "Content-Disposition",
            'attachment; filename="Tejas_P_R_Resume.pdf"'
        );
        headers.set("Cache-Control", "no-store");

        return new NextResponse(buffer, {
            status: 200,
            headers,
        });
    } catch (error) {
        console.error("Resume export error:", error);
        return NextResponse.json(
            { error: "Failed to export resume" },
            { status: 502 }
        );
    }
}
