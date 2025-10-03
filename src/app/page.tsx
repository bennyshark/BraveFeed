import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Inter, Roboto_Mono } from "next/font/google";

const geistSans = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function Home() {
  return (
    <div className="m-4">
      <h1>Home page</h1>
    </div>
  );
}
