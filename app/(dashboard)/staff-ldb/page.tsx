import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { FaTrainSubway } from "react-icons/fa6";

import { TitleHeader } from "@/components/title-header";
import { Schedule } from "@/components/schedule";

const StaffLDBPage = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");
  return (
    <main className="flex-1 p-4 space-y-4">
      <TitleHeader
        title="Staff LDB"
        icon={
          <FaTrainSubway className="size-6 text-pumpkin-900 dark:text-pumpkin-50" />
        }
      />

      <Schedule />
    </main>
  );
};

export default StaffLDBPage;
