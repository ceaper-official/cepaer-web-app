import ReicpeHeader from "../../layouts/header/header-recipe.js";
import Footer from "../../layouts/footer.js";

const ReicpeLayout = (props) => (
  <div>
    <ReicpeHeader />
    {props.children}
    <Footer/>
  </div>
);

export default ReicpeLayout;
