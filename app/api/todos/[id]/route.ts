import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { prisma } from "@/lib/prisma";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function PUT(
  req: NextRequest, context: { params: Promise<{ id: string }> }
) {
  const sessionData = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = sessionData?.session?.userId;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  return NextResponse.json({ success: true });
}

export async function DELETE(
  req: NextRequest, context: { params: Promise<{ id: string }> }
) {
  const sessionData = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = sessionData?.session?.userId;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ success: true });
}
