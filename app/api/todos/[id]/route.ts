import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { prisma } from "@/lib/prisma";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const sessionData = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = sessionData?.session?.userId;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  const updated = await prisma.todo.updateMany({
    where: { id: params.id, userId },
    data: body,
  });

  if (updated.count === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const sessionData = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = sessionData?.session?.userId;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const deleted = await prisma.todo.deleteMany({
    where: { id: params.id, userId },
  });

  if (deleted.count === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
