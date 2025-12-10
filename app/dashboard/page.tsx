// app/dashboard/page.tsx
import { auth } from "@/lib/auth";
import { signOut } from "@/lib/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import DashboardClient from "./dashbaord-client";

export default async function page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return redirect("/login");
  }

  return <DashboardClient session={session} />;
}
