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
import GithubProfile from "./components/GithubProfileFinder/GithubProfile.jsx";
import SearchAutoComp from "./components/searchAutoComplete/SearchAutoComp.jsx";
import TikTakToy from "./components/Tic-Tac-Toy/TikTakToy.jsx";
import UseFetchHook from "./components/UseFetchHook/UseFetchHook.jsx";
import ClickOutSideHook from "./components/ClickOutSideHook/ClickOutSideHook.jsx";
import Resize from "./components/UseResizeHook/Resize.jsx";
import ScrolleTopBottom from "./components/Scrolle/ScrolleTopBottom.jsx";
import ScrollToSection from "./components/Scrolle/ScrollToSection.jsx";
import Weather from "./components/WeatherApp/Weather.jsx";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/*  <GenColor /> */}
      {/* <RatingBar /> */}
      {/*   <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"3"}
        limit={"5"}
      /> */}
      {/*  <LoadMoreBtn /> */}
      {/* <TreeView menu={menus} /> */}

      {/* <Theme /> */}
      {/*  <ScrollIndicator url={"https://dummyjson.com/products"} limit={"100"} /> */}
      {/* <CustomTabs tabs={tabs} /> */}
      {/*  <ModelTest /> */}
      {/*  <GithubProfile /> */}
      {/* <SearchAutoComp url={"https://dummyjson.com/users"} /> */}
      {/*  <TikTakToy /> */}
      {/*  <UseFetchHook /> */}
      {/*  <ClickOutSideHook /> */}
      {/* <Resize /> */}
      {/*  <ScrolleTopBottom /> */}
      {/*  <ScrollToSection /> */}
      <Weather />
    </div>
  );
}

export default App;
