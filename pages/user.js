import BaseLayout from "../layouts/base.js";
import Link from "next/link";
import Add from "../assets/icons/ui/add.js";
import SettingSolid from "../assets/icons/ui/setting_solid.js";
import Instagram from "../assets/icons/social/instagram.js";
import Facebook from "../assets/icons/social/facebook.js";
import Twitter from "../assets/icons/social/twitter.js";
import CookSolid from "../assets/icons/ui/cook-solid.js";
import LikeSolid from "../assets/icons/ui/like-solid.js";
import CollectionSolid from "../assets/icons/ui/collection-solid.js";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import UserShot from "../layouts/shots/shot.js";
import UserCollection from "../layouts/collections/collection.js";

function UserImg() {
  return <img src="images/default/user.svg" alt="user image" />;
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

                <Link href="/edit">
                  <a className="button setting-button button-snow ico" style={{ marginTop: 25 }}>
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

          <Tabs>
           <TabList className="tab-label-wrapper user-data-wrapper">
             <Tab className="tab-label ico"><CookSolid />投稿したレシピ<span className="user-data">73</span></Tab>
             <Tab className="tab-label ico"><LikeSolid />お気に入り<span className="user-data">410</span></Tab>
             <Tab className="tab-label ico"><CollectionSolid/>コレクション<span className="user-data">3</span></Tab>
           </TabList>

           {/*全件表示*/}
           <TabPanel className="tab-content shots-wrapper">
<UserShot/>
  <UserShot/>
    <UserShot/>
  <UserShot/>
    <UserShot/>
  <UserShot/>
    <UserShot/>
  <UserShot/>
           </TabPanel>
           <TabPanel className="tab-content shots-wrapper">
<UserShot/>
  <UserShot/>
    <UserShot/>
  <UserShot/>
    <UserShot/>
  <UserShot/>
    <UserShot/>
  <UserShot/>
           </TabPanel>
           <TabPanel className="tab-content shots-wrapper collection-wrapper">
<UserCollection/>
  <UserCollection/>
    <UserCollection/>
      <UserCollection/>
        <UserCollection/>
          <UserCollection/>

           </TabPanel>
         </Tabs>

        </div>
      </div>
    </div>
  </BaseLayout>
);
