import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  return (
    <main className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl font-medium text-pumpkin-900 text-center leading-relaxed">
        Hi, <br />
        {user?.fullName} 👋🏻
      </h1>
    </main>
  );
}
