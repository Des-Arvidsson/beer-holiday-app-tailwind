import { NextResponse } from "next/server";
import { employeeBeerStore } from "./store";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const idParam = searchParams.get("employeeId");
  if (!idParam) return NextResponse.json({ error: "employeeId required" }, { status: 400 });

  const employeeId = Number(idParam);
  const data = employeeBeerStore.get(employeeId) ?? null;

  return NextResponse.json({ employeeId, ...data });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.employeeId || !body?.beer) {
    return NextResponse.json({ error: "employeeId and beer required" }, { status: 400 });
  }

  const employeeId = Number(body.employeeId);
  const beer = String(body.beer);
  const updatedAt = new Date().toISOString();

  employeeBeerStore.set(employeeId, { beer, updatedAt });
  return NextResponse.json({ employeeId, beer, updatedAt });
}
