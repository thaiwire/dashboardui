"use client";

import Image from "next/image";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teachers"
    | "students"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type == "delete" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type == "create"
      ? "bg-red-500"
      : type == "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";
  return (
    <>
      <button className="{`$(size)} flex items-center justify-center rounded-full ${bgColor}`">
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
    </>
  );
};
export default FormModal;
