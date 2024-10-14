import Pageination from "@/components/Pageination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, parentsData, subjectsData } from "@/lib/data";
import { access } from "fs";
import Image from "next/image";
import Link from "next/link";

type Subject = {
    id: number;
    name: string;
    teachers: string[];
   
}

const columns = [
    { header: "Subjects", accessor: "Subjects" },
   
    {
        header: "teacher",
        accessor: "Teacher",
        className: "hidden md:table-cell"
    },
       
    {
        header: "Action",
        accessor: "action",

    }

]


const SubjectListPage = () => {
    const renderRow = (item: Subject) => (

        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50
        text-sm hover:bg-lamaPurpleLight">
            <td className="flex items-center gap-4 p-4">
            {item.name}
            </td>  
            <td>
            <p className="text-xs text-gray-500">{item.teachers.join(",")}</p>
            </td>            
            
            <td>
                <div className="flex flex-row">
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center
                         rounded-full bg-lamaSky">
                            <Image src="/view.png" alt="View" width={20} height={20} />
                        </button>
                    </Link>
                    {role === "admin" && (
                        <button className="w-7 h-7 flex items-center justify-center
                         rounded-full bg-lamaPurple">
                            <Image src="/delete.png" alt="View" width={20} height={20} />
                        </button>
                    )}
                </div>
            </td>
        </tr>

    );

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">ALL Subjects</h1>
                <div className="flex flex-col md:flex-row items-center gap-4
                 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center
                        rounded-full bg-lamaYellow">
                            <Image src="/filter.png" alt="Add" width={20} height={20} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center
                        rounded-full bg-lamaYellow">
                            <Image src="/sort.png" alt="Add" width={20} height={20} />
                        </button>
                        {role === "admin" && (<button className="w-8 h-8 flex items-center justify-center
                        rounded-full bg-lamaYellow">
                            <Image src="/plus.png" alt="Add" width={20} height={20} />
                        </button>)}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <div className="">
                <Table columns={columns} renderRow={renderRow} data={subjectsData} />
            </div>
            {/* PAGE */}
            <div className="">
                <Pageination />
            </div>
        </div>
    );
}
export default SubjectListPage;