import "./App.css";
import AppFooter from "./sections/AppFooter/AppFooter";
import AppHeader from "./sections/AppHeader/AppHeader";
import HeroSection from "./sections/hero-section/HeroSection";
import CustomerFeedback from "./sections/CustomerFeedback/CustomerFeedback";
import NewsArticle from "./sections/NewsArticle/NewsArticle";
import ExploreOption from "./sections/ExploreOption/ExploreOption";
import BrandCategory from "./sections/BrandCategory/BrandCategory";
import MostSearched from "./sections/MostSearched/MostSearched";

function App() {
  return (
    <>
      <AppHeader />
      <HeroSection />
      <ExploreOption />
      <BrandCategory />
      <MostSearched />

      <CustomerFeedback/>
      <NewsArticle/> 
      <AppFooter/>
    </>
  );
}

export default App;
