import CardListFeature from "./features/card/List";
import RoutesAll from "./routes/RoutesAll";
import Block from "./ui/Block";
import Header from "./ui/Header";
import Input from "./ui/Input";

function App() {
  return (
    <>
      <Header />
      <Block textBlog={"Блог"} />
      <CardListFeature />
      <Block
        textPromo={
          "Получите бесплатно дизайн проект кухни и консультацию дизайнера"
        }
        desc={"Вы узнаете точную стоимость вашей кухни и получите 3D-проект"}
        inp={<Input />}
      />
      <RoutesAll />
    </>
  );
}

export default App;
