import CardListFeature from "./features/card/List";
import RoutesAll from "./routes/RoutesAll";
import Block from "./ui/Block";
import Header from "./ui/Header";

function App() {
  return (
    <>
      <Header />
      <Block title={"Блог"} />
      <CardListFeature />
      <Block />
      <RoutesAll />
    </>
  );
}

export default App;
