import Link from 'next/link';
import Logo from "../assets/logo.js";

const GSHeader = () => (
  <div>
  <div id="gs-header">
    <div className="gs-hader-wrapper">
                <div className="nav-container">
                <Link href="/">
                <a className="logo-link">
          <Logo/>
          </a>
                    </Link>
  </div>
</div>
</div>
</div>
)
export default GSHeader
