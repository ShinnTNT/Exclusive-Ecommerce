import Image from "next/image";

import AuthCover from "@/public/images/Side Image.svg";
import AuthForm from "./components/AuthForm";

export const metadata = {
  title: "Sign Up",
  openGraph: {
    title: "Sign Up",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sign-up`,
  },
  twitter: { title: "Sign Up" },
};

export default function Auth() {
  return (
    <main className="main-container">
      <div className="flex gap-20 items-center pt-10">
        <div>
          <Image width={560} src={AuthCover} alt="Auth Cover Image" priority />
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="text-4xl">Create an account</div>
          <div className="text-sm mt-4">Enter your details below</div>

          <div className="mt-10">
            <AuthForm />
          </div>
        </div>
      </div>
    </main>
  );
}
