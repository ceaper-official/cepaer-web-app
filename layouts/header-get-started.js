import Link from 'next/link';
import Logo from "../assets/logo.js";

const GSHeader = () => (
  <div>
  <div id="gs-header">
    <div class="gs-hader-wrapper">
                <div class="nav-container">
                <Link href="/">
                <a class="logo-link">
          <Logo/>
          </a>
                    </Link>
  </div>
</div>
</div>
</div>
)
export default GSHeader
