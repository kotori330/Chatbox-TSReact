import { listContact } from "../../services/staticData";

const UserInfo = () => {
  return (
    <>
    <div className="flex justify-center items-center space-x-4">
        <img src={listContact[0].avatar} alt="profile-picture" className="rounded-full w-10 h-10"/>
        <div className="grid auto-rows-auto -space-y-1 text-sm">
          <span className="font-bold">{listContact[0].name}</span>
          <span className="text-slate-400">{listContact[0].email}</span>
        </div>
      </div>
    </>
  )
}

export default UserInfo