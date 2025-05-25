import Input from "../ui/Input";
import Block from "../ui/Block";
import ButtonBlock from "../ui/ButtonBlock";
import CardListFeature from "../features/card/List";

const Home = () => {
  return (
    <>
      <Block textBlog={"Блог"} />
      <CardListFeature />
      <Block
        textPromo={
          "Получите бесплатно дизайн проект кухни и консультацию дизайнера"
        }
        desc={"Вы узнаете точную стоимость вашей кухни и получите 3D-проект"}
        search={<Input text="Ваш Телефон" />}
        button={<ButtonBlock title={"Записаться"} />}
      />
    </>
  );
};

export default Home;
