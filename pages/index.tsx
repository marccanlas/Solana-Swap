import Image from "next/image";
import Header from "@/components/Header";
import Swap from '@/components/Swap'

export default function Home() {
  return (
    <main
      className={`flex min-h-screen h-screen flex-col items-center px-24 py-8`}
    >
      <Header />
      <Swap />
    </main>
  );
}
