import { currentUser } from "@clerk/nextjs/server";
import { Rainbow } from "lucide-react";
import { redirect } from "next/navigation";

import { DataAccordion } from "@/components/data-accordion";
import { TitleHeader } from "@/components/title-header";

import { rainbowBoardData } from "@/data";

const RainbowBoardPage = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");
  
  return (
    <main className="flex-1 p-4 space-y-4">
      <TitleHeader
        title="Rainbow Board"
        icon={<Rainbow className="size-6 text-pumpkin-900" />}
      />

      <div className="w-full h-[500px] overflow-y-auto">
        <DataAccordion data={rainbowBoardData} />
      </div>
    </main>
  );
};

export default RainbowBoardPage;
