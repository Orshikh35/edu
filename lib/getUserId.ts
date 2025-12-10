import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function getUserId() {
  const sessionData = await auth.api.getSession({
    headers: await headers(),
  });

  return sessionData?.session?.userId ?? null;
}
