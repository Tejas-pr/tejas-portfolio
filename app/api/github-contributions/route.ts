import { NextRequest, NextResponse } from "next/server";
import { githubConfig } from "@/config/Github";

// The upstream github-contributions API sends no Access-Control-Allow-Origin
// header, so the browser blocks a direct client-side fetch with a CORS
// error. Proxy it through our own origin (server-to-server fetches aren't
// subject to CORS) so the client component can call this route instead.
export async function GET(req: NextRequest) {
  const username =
    req.nextUrl.searchParams.get("username") || githubConfig.username;

  try {
    const response = await fetch(`${githubConfig.apiUrl}/${username}`, {
      // Contribution data doesn't need to be fresh to the second.
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(
        `Upstream GitHub contributions API returned ${response.status}`
      );
    }

    const data = await response.json();
    return NextResponse.json(data, {
      headers: { "Cache-Control": "public, max-age=3600" },
    });
  } catch (error) {
    console.error("Failed to fetch GitHub contributions:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub contributions" },
      { status: 502 }
    );
  }
}
