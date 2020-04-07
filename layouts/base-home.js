import HomeHeader from '../layouts/header-home.js'
import Footer from '../layouts/footer.js'

const HomeBaseLayout = (props) => (
  <div>
    <HomeHeader />
    {props.children}
    <Footer />
  </div>
)

export default HomeBaseLayout
