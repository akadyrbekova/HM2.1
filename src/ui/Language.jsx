const Language = () => {
  return (
    <div className="w-18 flex justify-around items-center ml-6">
      <img src="../src/assets/img/ru.png" className="w-[12px] h-[12px]"></img>
      <p className="text-xl">Ru</p>
      <svg
        className="w-[8px] h-[11px]"
        width="9"
        height="6"
        viewBox="0 0 9 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.15714 0.3L4.5 4.09708L7.84286 0.225C8.1 -0.0749996 8.55 -0.0749996 8.80714 0.225C9.06429 0.525 9.06429 1.05 8.80714 1.35L5.01429 5.775C4.88571 5.925 4.69286 6 4.5 6C4.30714 6 4.11429 5.925 3.98571 5.85L0.192857 1.425C-0.0642858 1.125 -0.0642857 0.6 0.192857 0.3C0.45 1.96701e-08 0.9 3.93403e-08 1.15714 0.3Z"
          fill="#39373A"
        />
      </svg>
    </div>
  );
};

export default Language;
