import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json({ error: "Missing file ID" }, { status: 400 });
    }

    const googleDriveUrl = `https://drive.google.com/uc?export=download&id=${id}`;

    try {
        const response = await fetch(googleDriveUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch from Google Drive: ${response.status}`);
        }

        const buffer = await response.arrayBuffer();
        const headers = new Headers();

        // Determine content type (fallback to pdf if unknown)
        const contentType = response.headers.get("content-type") || "application/pdf";
        headers.set("Content-Type", contentType);

        // Set the filename as requested
        headers.set("Content-Disposition", 'attachment; filename="Tejas_P_R_Resume.pdf"');

        return new NextResponse(buffer, {
            status: 200,
            headers,
        });
    } catch (error) {
        console.error("Download error:", error);
        return NextResponse.json(
            { error: "Failed to download resume" },
            { status: 500 }
        );
    }
}
