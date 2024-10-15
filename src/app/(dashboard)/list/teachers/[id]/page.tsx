"use client";
import BigCalendar from "@/components/BigCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Image from "next/image";
import Announcements from "@/components/Announcements";
import Link from "next/link";
import Performance from "@/components/Performance"; // Ensure this path is correct

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="rounded-full"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">JARUWAT Namvong</h1>
              <p className="text-sm text-gray-500">It Support</p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>25.01.2513</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>jarwuatmail@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+0891993887</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARD */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div
              className="bg-white p-4 rounded-md flex gap-4 w-full
         md:w-[48%]"
            >
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div
              className="bg-white p-4 rounded-md flex gap-4 w-full
            md:w-[48%]"
            >
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Branch</span>
              </div>
            </div>
            {/* CARD */}
            <div
              className="bg-white p-4 rounded-md flex gap-4 w-full
            md:w-[48%]"
            >
              <Image
                src="/singbrancher.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">2%</h1>
                <span className="text-sm text-gray-400">Brancher</span>
              </div>
            </div>
            {/* CARD */}
            <div
              className="bg-white p-4 rounded-md flex gap-4 w-full
             md:w-[48%]"
            >
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6%</h1>
                <span className="text-sm text-gray-400">Lession</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher's Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link
              className="p-3 rounded-md bg-lamaSky"
              href="/dashboard/list/teachers"
            >
              Classes
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaPurple"
              href="/dashboard/list/teachers"
            >
              Students
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaYellow"
              href="/dashboard/list/teachers"
            >
              Lessons
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaSky"
              href="/dashboard/list/teachers"
            >
              Exams
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaSky"
              href="/dashboard/list/teachers"
            >
              Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};
export default SingleTeacherPage;
