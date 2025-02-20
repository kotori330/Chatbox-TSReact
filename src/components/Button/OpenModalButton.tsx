const OpenModalButton = ({ openModal }: { openModal: () => void }) => {
  return (
    <>
      <button
        className="rounded-full text-2xl hover:cursor-pointer hover:bg-slate-100 relative border border-slate-300 px-3 py-1 shadow-sm"
        onClick={openModal}
        onMouseEnter={(e) => {
          const span = e.currentTarget.querySelector("span");
          if (span) span.style.display = "block";
        }}
        onMouseLeave={(e) => {
          const span = e.currentTarget.querySelector("span");
          if (span) span.style.display = "none";
        }}
      >
        &#43;
        <span className="absolute bg-black text-white bottom-full mb-2 hidden text-sm rounded-2xl px-6 left-1/2 transform -translate-x-1/2">
          New Message
        </span>
      </button>
    </>
  );
};

export default OpenModalButton;
