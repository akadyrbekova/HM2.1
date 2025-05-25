import CardListComponent from "../../components/card/List";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
const cards = [
  {
    id: 1,
    img: img1,
    date: "март 11, 2022",
    title: "Из чего складывается стоимость кухни?",
    description: "рассказывает дизайнер Светлана",
  },
  {
    id: 2,
    img: img2,
    date: "март 11, 2022",
    title: "Из чего складывается стоимость кухни?",
    description: "рассказывает дизайнер Светлана",
  },
  {
    id: 3,
    img: img3,
    date: "март 11, 2022",
    title: "Из чего складывается стоимость кухни?",
    description: "рассказывает дизайнер Светлана",
  },
];

const CardListFeature = () => {
  return (
    <div>
      <CardListComponent cards={cards}></CardListComponent>
    </div>
  );
};

export default CardListFeature;
