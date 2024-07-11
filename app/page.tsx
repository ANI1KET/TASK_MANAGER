"use client";
import { useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

import Tasks from "./Components/Tasks/Tasks";
import { useGlobalState } from "./context/globalProvider";

export default function Home() {
  const router = useRouter();

  const { user } = useUser();
  if (!user) {
    router.push("/signin");
  }

  const { tasks } = useGlobalState();

  return <Tasks title="All Tasks" tasks={tasks} />;
}
