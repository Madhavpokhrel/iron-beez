import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
// import RecommendationCell from 'src/components/RecommendationsCell'

type IronBeezLayoutProps = {
  children?: React.ReactNode
}

const IronBeezLayout = ({ children }: IronBeezLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default IronBeezLayout
