import { listContact } from "../../services/staticData";

export const UserInfo = ({
  className,
  src,
  name,
  email,
  contactId,
}: {
  className: string;
  src: string;
  name: string;
  email: string;
  contactId: string;
  isAdded?: boolean;
}) => {
  return (
    <div className={className} id={contactId}>
      <img src={src} alt="profile-picture" className="rounded-full w-10 h-10" />
      <div className="grid auto-rows-auto -space-y-1 text-sm select-none">
        <span className="font-bold ">{name}</span>
        <span className="text-slate-400">{email}</span>
      </div>
    </div>
  );
};

const MainUserInfo = () => {
  // const [firstContact] = listContact;
  const [, , thirdContact] = listContact;

  return (
    <>
      <UserInfo
        className="flex justify-center items-center space-x-4"
        contactId={thirdContact.id}
        src={thirdContact.avatar}
        name={thirdContact.name}
        email={thirdContact.email}
      />
    </>
  );
};

export default MainUserInfo;
