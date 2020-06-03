import Link from "next/link";
import HomeApp from "../assets/icons/ui/home_solid.js";
import HumanApp from "../assets/icons/ui/human_solid.js";
import Back from "../assets/icons/ui/back.js";
import Search from "../assets/icons/ui/search.js";
import Router from "next/router";

function User() {
  return <img src="images/default/user.jpg" alt="user image" />;
}

const HomeHeaderApp = () => (
  <div id="home-header-app">
    {" "}
    <div className="section">
      <div className="app-header-wrapper">
        <div className="app-header-inner home-app-header-inner1">
          <div className="search-wrapper">
            <span className="search-icon">
              <span className="search-icon-inner">
                <Search />
              </span>
            </span>
            <input
              className="search xs-text"
              type="search"
              name="q"
              placeholder="料理、材料、キャンプ道具..."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeHeaderApp;
