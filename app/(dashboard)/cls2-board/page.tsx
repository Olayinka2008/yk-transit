import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { IoMegaphoneOutline } from "react-icons/io5";

import { DataAccordion } from "@/components/data-accordion";
import { TitleHeader } from "@/components/title-header";

import { cls2BoardData } from "@/data";

const CLS2Page = async () => {
  const clerkUser = await currentUser();

  if (!clerkUser) redirect("/sign-in");

  return (
    <main className="flex-1 p-4 space-y-4">
      <TitleHeader
        title="CLS2 Board"
        icon={<IoMegaphoneOutline className="size-6 text-pumpkin-900 dark:text-pumpkin-50" />}
      />

      <div className="w-full h-[500px] overflow-y-auto">
        <DataAccordion data={cls2BoardData} />
      </div>
    </main>
  );
};

export default CLS2Page;
