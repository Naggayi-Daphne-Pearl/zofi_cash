import Image from "next/image";
import { Inter } from "next/font/google";
import SignupForm from "@/components/SignUpForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <SignupForm />
    </main>
  );
}
