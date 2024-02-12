import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`
export async function POST(request) {
  const secret = request.nextUrl.searchParams.get("secret");
  const { full_slug: path } = await request.json();
  const lastPathCharacter = path.slice(-1);

  const cleanedPath = lastPathCharacter === "/" ? `/${path.slice(0, -1)}` : `/${path}`;

  if (secret !== process.env.NEXT_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  if (!cleanedPath) {
    return NextResponse.json({ message: "Missing path" }, { status: 400 });
  }

  revalidatePath(cleanedPath === "/home" ? "/" : cleanedPath);

  return NextResponse.json({ revalidated: true, now: Date.now(), path: cleanedPath });
}
