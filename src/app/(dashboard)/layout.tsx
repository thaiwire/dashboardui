import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
       <div className="w-[14%] md:w[8%] lg:w-[16%] xl:w-[14%] bg-red-200">
        <Link className="flex items-center justify-center lg:justify-start gap-2 p-4" href="/dashboard">
         <Image src="/logo.png" alt="logo" width={32} height={32} />
         <span className="hidden lg:block">School Manager</span> 
        </Link>
        <Menu />
        </div>
       
       <div className="w-[86%] md:[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll
       flex flex-col">
        <Navbar />
        {children}
        </div>
     
    </div>
  );
}
