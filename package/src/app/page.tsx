import HomeContent from "@/app/components/Home/HomeContent";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HGMintl",
};

export default function Home() {
  return (
    <HomeContent />
  );
}