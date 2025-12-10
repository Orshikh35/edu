import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import { getUserId } from "@/lib/getUserId";

export async function GET() {
  const sessionData = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = sessionData?.session?.userId;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const todos = await prisma.todo.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(todos);
}

export async function POST(req: Request) {
  const sessionData = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = sessionData?.session?.userId;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title } = await req.json();

  const todo = await prisma.todo.create({
    data: {
      title,
      userId,
    },
  });

  return NextResponse.json(todo, { status: 201 });
}
