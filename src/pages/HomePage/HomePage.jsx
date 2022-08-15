import About from '../../components/About/About';
import AboutDashboardSection from '../../components/AboutDashboardSection/AboutDashboardSection';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { RecommendationsCell } from '../../components/RecommendationsCell/RecommendationsCell';
import { RecentlyAddedEquipmentsCell } from '../../components/RecentlyAddedEquipmentsCell/RecentlyAddedEquipmentsCell';
// import About from '../../components/About/About';

const HomePage = () => {
  return (
    <>
      <Header />
      <AboutDashboardSection />
      <About />
      {/* Commented Line */}
      <RecommendationsCell />
      <RecentlyAddedEquipmentsCell />
      {/* <ArticlesCell /> */}
      <Footer />
    </>
  );
};

export default HomePage;
