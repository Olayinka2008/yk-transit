import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="text-3xl font-bold text-pumpkin-900">
            Welcome Back !
          </h1>
          <p className="text-base text-pumpkin-200">
            Log in or Create an account to get to your dashboard.
          </p>
        </div>

        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp />
          </ClerkLoaded>

          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>

      <div className="hidden lg:flex bg-pumpkin-600 items-center justify-center">
        <Image src="/logo2.svg" alt="logo" width={200} height={200} />
      </div>
    </div>
  );
};

export default SignUpPage;
