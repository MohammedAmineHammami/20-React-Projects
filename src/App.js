import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import GenColor from "./components/ColorGenerator/GenColor";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import RatingBar from "./components/ratingBar/RatingBar";
import TreeView from "./components/TreeView/TreeView";
import menus from "./components/TreeView/data";
import ReactQrCode from "./components/react-qr-code/React-qr-code";

function App() {
  return (
    <div className="App">
      {/*  <Accordion />
      <GenColor />
      <RatingBar />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"3"}
        limit={"5"}
      />
      <LoadMoreBtn />
      <TreeView menu={menus} /> */}
      <ReactQrCode />
    </div>
  );
}

export default App;
