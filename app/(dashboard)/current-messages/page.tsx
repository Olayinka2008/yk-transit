import { currentUser } from "@clerk/nextjs/server";
import { MessageCircle } from "lucide-react";
import { redirect } from "next/navigation";

import { MessageAccordion } from "@/components/data-accordion";
import { TitleHeader } from "@/components/title-header";

const CurrentMessagePage = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");

  return (
    <main className="flex-1 p-4 space-y-4">
      <TitleHeader
        title="Current Messages"
        icon={<MessageCircle className="size-6 text-pumpkin-900" />}
      />
      <MessageAccordion />
    </main>
  );
};

export default CurrentMessagePage;
