const OpenModalButton = ({ openModal }: { openModal: () => void }) => {
  return (
    <>
      <button
        className="rounded-full text-2xl hover:cursor-pointer hover:bg-slate-100 relative border border-slate-300 px-5 py-5 shadow-sm"
        onClick={openModal}
        onMouseEnter={(e) => {
          const span = e.currentTarget.querySelectorAll("span")[1];
          if (span) span.style.display = "block";
        }}
        onMouseLeave={(e) => {
          const span = e.currentTarget.querySelectorAll("span")[1];
          if (span) span.style.display = "none";
        }}
      >
        {/* CSS: 'inset-0': This set all 4 properties: top bottom left right to 0px */}
        {/* Usage: USe to stretch parent element, useful to align center */}
        <span className="absolute inset-0 top-0.5">&#43;</span>

{/* CSS: 'bottom' and 'left': Using absolute value like px will always fixed its position based on the container's position  */}
{/* CSS: 'bottom' and 'left': Using relative value like % will make its position adjust flexibly when the container's change its size */}
{/* CSS: 'translate': Work along with other positioning properties. This moves the absolute element*/}
        <span className="absolute bg-black text-white bottom-full left-1/2 mb-2 hidden text-sm rounded-2xl px-6 -translate-x-1/2">
          New Message
        </span>
      </button>
    </>
  );
};

export default OpenModalButton;
