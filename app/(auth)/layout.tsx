import Image from "next/image";
import { ReactNode } from "react";

import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-auth-light bg-center bg-no-repeat
  px-4 py-10 dark:bg-auth-dark"
    >
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-h-full rounded-[10px] px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-center gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark100_light900">Join DevFlow</h1>
            <p className="paragraph-regular text-dark500_light400">
              To get your questions answered
            </p>
          </div>
          <Image
            src="/images/site-logo.svg"
            width={50}
            height={50}
            alt="DevFlow Logo"
            className="object-contain"
          />
        </div>

        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
