import BaseLayout from "../layouts/base.js";
import Link from "next/link";
import Add from "../assets/icons/ui/add.js";
import SettingSolid from "../assets/icons/ui/setting_solid.js";
import Instagram from "../assets/icons/social/instagram.js";
import Facebook from "../assets/icons/social/facebook.js";
import Twitter from "../assets/icons/social/twitter.js";
import UserShot from "../layouts/shot_user.js";
import PenSolid from "../assets/icons/ui/pen_solid.js";
import CookSolid from "../assets/icons/ui/cook-solid.js";
import StarSolid from "../assets/icons/ui/star-solid.js";

function UserImg() {
  return <img src="images/default/user.jpg" alt="user image" />;
}

export default () => (
  <BaseLayout>
    <div id="page">
      <div className="user-row">
        <div className="contents">
          <div className="section">
            <div className="user-container">
              <div className="user-avatar">
                <UserImg />
              </div>
              <div className="user-inner">
                <p className="user-text name">ケリー小田</p>
                <p className="user-bio">
                  私は、料理が大好きな生粋のキャンパーです。週7で、キャンプに行っています！よく出没する場所は高尾山です。
                </p>
                <div className="user-social">
                  {/*ユーザーのSNSリンク*/}
                  <a className="user-social-link">
                    <Instagram />
                  </a>
                  <a className="user-social-link">
                    <Facebook />
                  </a>
                  <a className="user-social-link">
                    <Twitter />
                  </a>
                </div>
                <div className="user-data">
                  <a
                    className="user-data-inner xs-text user-data-inner-start"
                    style={{ paddingLeft: 0 }}
                  >
                    <h6>3</h6>
                    <span>レシピ</span>
                  </a>
                  <a className="user-data-inner xs-text">
                    <h6>134</h6>
                    <span>作ったレシピ</span>
                  </a>
                  <a className="user-data-inner xs-text">
                    <h6>204</h6>
                    <span>フォロワー</span>
                  </a>
                  <a
                    className="user-data-inner xs-text user-data-inner-last"
                    style={{ paddingRight: 0 }}
                  >
                    <h6>13</h6>
                    <span>フォロー</span>
                  </a>
                </div>
                <a className="button add-button button-black-ol ico">
                  <Add />
                  フォロー
                </a>
                <Link href="/edit">
                  <a className="button setting-button button-snow ico">
                    <SettingSolid />
                    プロフィールを編集
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contents">
        <div className="section">
          <div className="tab-wrapper">
            <input
              id="tab01"
              type="radio"
              name="tab"
              className="tab-switch"
              checked="checked"
            />
            <label className="tab-label s-text ico" for="tab01">
              <PenSolid />
              投稿したレシピ
              <span className="tab-label-data">{/*数値取得*/}30</span>
            </label>
            <div className="tab-content">
              <UserShot />
            </div>
            <input id="tab02" type="radio" name="tab" className="tab-switch" />
            <label className="tab-label s-text ico" for="tab02">
              <CookSolid />
              作ったレシピ
              <span className="tab-label-data">{/*数値取得*/}6</span>
            </label>
            <div className="tab-content">
              <UserShot />
            </div>
            <input id="tab03" type="radio" name="tab" className="tab-switch" />
            <label className="tab-label s-text ico" for="tab03">
              <StarSolid />
              お気に入り
              <span className="tab-label-data">{/*数値取得*/}102</span>
            </label>
            <div className="tab-content">
              <UserShot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
);
