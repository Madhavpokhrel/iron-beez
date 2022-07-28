// import { Link, routes } from '@redwoodjs/router'
// import { MetaTags } from '@redwoodjs/web'

import About from 'src/components/About/About'
import AboutDashboardSection from 'src/components/AboutDashboardSection/AboutDashboardSection'
import ArticlesCell from 'src/components/ArticlesCell'
import RecentlyAddedEquipmentsCell from 'src/components/RecentlyAddedEquipmentsCell'
import RecommendationsCell from 'src/components/RecommendationsCell'

const HomePage = () => {
  return (
    <>
      <AboutDashboardSection />
      <About />
      {/* Commented Line */}
      <RecommendationsCell />
      <RecentlyAddedEquipmentsCell />
      <ArticlesCell />
    </>
  )
}

export default HomePage
