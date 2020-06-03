import Header from "../layouts/header.js";
import Footer from "../layouts/footer.js";

const BaseLayout = (props) => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default BaseLayout;
