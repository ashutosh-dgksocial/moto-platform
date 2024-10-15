import "./App.css";
import AppFooter from "./sections/AppFooter/AppFooter";
import AppHeader from "./sections/AppHeader/AppHeader";
import HeroSection from "./sections/hero-section/HeroSection";
import CustomerFeedback from "./sections/CustomerFeedback/CustomerFeedback";
import NewsArticle from "./sections/NewsArticle/NewsArticle";
import ExploreOption from "./sections/ExploreOption/ExploreOption";


function App() {
  return (
    <>
      <AppHeader />
      <HeroSection />
      <ExploreOption />
      <CustomerFeedback/>
      <NewsArticle/>
      <AppFooter/>
    </>
  );
}

export default App;
