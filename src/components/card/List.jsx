const CardListComponent = ({ cards }) => {
  return (
    <ul className=" w-[2184px] flex justify-between  m-auto p-7">
      {cards.map((card) => (
        <li key={card.id} className="w-md h-[655px] flex flex-col m-auto p-7 ">
          <img src={card.img} className="w-[376px] h-[376px]" />
          <p className="font-normal my-3">{card.date}</p>
          <h3 className="text-2xl font-normal">{card.title}</h3>
          <p className="text-lg font-normal my-3">{card.description}</p>
          <button className="w-[200px] h-[47px] bg-[#FFCC29] rounded-[28px] font-normal">
            Прочесть за 7 минут
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CardListComponent;
