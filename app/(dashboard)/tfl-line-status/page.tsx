import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { HiStatusOnline } from "react-icons/hi";

import { DataAccordion } from "@/components/data-accordion";
import { TitleHeader } from "@/components/title-header";

import { tflLineStatusData } from "@/data";

const TFLLineStatusPage = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");

  return (
    <main className="flex-1 p-4 space-y-4">
      <TitleHeader
        title="TFL Line Status"
        icon={<HiStatusOnline className="size-6 text-pumpkin-900" />}
      />

      <div className="w-full h-[500px] overflow-y-auto">
        <DataAccordion data={tflLineStatusData} />
      </div>
    </main>
  );
};

export default TFLLineStatusPage;
