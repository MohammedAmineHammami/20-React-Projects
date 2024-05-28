import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import GenColor from "./components/ColorGenerator/GenColor";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import RatingBar from "./components/ratingBar/RatingBar";
import TreeView from "./components/TreeView/TreeView";
import menus from "./components/TreeView/data";
import ReactQrCode from "./components/react-qr-code/React-qr-code";
import Theme from "./components/ThemeChange/Theme";
import ScrollIndicator from "./components/ScrolleIndicator";
import CustomTabs from "./components/CustomTabs/CustomTabs";
import tabs from "./components/CustomTabs/data.js";
import ModelTest from "./components/PopUp/ModelTest.jsx";

function App() {
  return (
    <div className="App">
      {/*  <Accordion /> */}
      {/* <GenColor /> */}
      {/* <RatingBar /> */}
      {/*   <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"3"}
        limit={"5"}
      /> */}
      {/*  <LoadMoreBtn /> */}
      {/* <TreeView menu={menus} /> */}
      {/*  <ReactQrCode /> */}
      {/* <Theme /> */}
      {/*  <ScrollIndicator url={"https://dummyjson.com/products"} limit={"100"} /> */}
      {/* <CustomTabs tabs={tabs} /> */}
      <ModelTest />
    </div>
  );
}

export default App;
