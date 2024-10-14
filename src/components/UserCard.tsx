const UserCard = ({ type } :{type:string}) => {
    return (
        <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-2 flex-1
        min-w-[130px">
          <div className="flex justify-between items-center">
            <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024/25</span>
           </div>
          <h1 className="txt-2xl font-semibold my-4">1234</h1>
          <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
        </div>
    );
}
export default UserCard;