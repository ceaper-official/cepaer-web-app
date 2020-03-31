import Header from './header/header.js'
import Footer from './footer.js'

export default function Layout(props){
  return(
      <Header />
      {props.children}
      <Footer />
  );
}
