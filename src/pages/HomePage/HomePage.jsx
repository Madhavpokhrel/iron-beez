import About from '../../components/About/About';
import AboutDashboardSection from '../../components/AboutDashboardSection/AboutDashboardSection';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { RecommendationsCell } from '../../components/RecommendationsCell/RecommendationsCell';
import { RecentlyAddedEquipmentsCell } from '../../components/RecentlyAddedEquipmentsCell/RecentlyAddedEquipmentsCell';
import RecentArticle from '../../components/RecentArticle/RecentArticle';

const HomePage = ({
  zipCodeValue,
  setZipCodeValue,
  searchValue,
  setSearchValue,
}) => {
  return (
    <>
      <Header />
      <AboutDashboardSection
        zipCodeValue={zipCodeValue}
        setZipCodeValue={setZipCodeValue}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <About />
      {/* Commented Line */}
      <RecommendationsCell />
      <RecentlyAddedEquipmentsCell />
      <RecentArticle />
      <Footer />
    </>
  );
};

export default HomePage;
