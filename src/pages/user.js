import Link from "next/link";

import { getCurrentUser, storage, db } from "@lib/firebase";
import { auth, firebase } from "@src/firebase";

import BaseLayout from "@components/layout/BaseLayout";
import HeroUser from "@components/hero/HeroUser";
import Content from "@components/content/Content";
import Block from "@components/block/Block";
import Button from "@components/button/Button";
import UserPostContainer from "@components/user/UserPostContainer";
import UserPost from "@components/user/UserPost";
import UserIcon from "@components/user/UserIcon";
import UserCollection from "@components/user/Usercollection";
import Tabs from "@components/tabs/Tabs";

import Add from "@icons/ui/add.js";
import SettingSolid from "@icons/ui/setting-solid.js";
import Instagram from "@icons/social/instagram.js";
import Facebook from "@icons/social/facebook.js";
import Twitter from "@icons/social/twitter.js";
import CookSolid from "@icons/ui/cook-solid.js";
import LikeSolid from "@icons/ui/like-solid.js";
import CollectionSolid from "@icons/ui/collection-solid.js";

function RecipeImg() {
  return <img src="images/mock/food.jpg" alt="recipe image" />;
}

class UserPage extends React.Component {
  async componentDidMount() {
    // TODO: Firestoreからユーザ情報を取得
    try {
      const user = getCurrentUser();
      const userDoc = await db.collection("users").doc(user.uid).get();
      console.log(userDoc);
      this.setState({
        name: userDoc.data.name,
        about: userDoc.data.about,
        profileImageUrl: userDoc.data.image,
      });
    } catch (error) {
      console.error(error);
    }
  }

    state = {
      user: null,
    };
    componentDidMount() {
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({ user });
      });
    }

  render() {
    const firestoreDatas = this.props.datas;
    return (
      <BaseLayout>
        <HeroUser
          name={this.state.user && this.state.user.displayName}
          icon={this.state.user && this.state.user.photoURL}
          bio="私は、料理が大好きな生粋のキャンパーです。週7で、キャンプに行っています！よく出没する場所は高尾山です。"
          instagram="https://www.instagram.com/"
          twitter="http://twitter.com/"
          facebook="http://facebook.com/"
          />

          <Block>
            <Tabs>
            <div label='投稿したレシピ' icon={<CookSolid/>}>
              <UserPostContainer>
                <UserPost/>
                <UserPost/>
                <UserPost/>
                <UserPost/>
              </UserPostContainer>
            </div>
            <div label="お気に入り" icon={<LikeSolid/>}>
              <UserPostContainer>
                <UserPost/>
              </UserPostContainer>
            </div>
            <div label="コレクション" icon={<CollectionSolid/>}>
              <UserPostContainer>
                <UserCollection
                title="ダイエットに効果的な料理100選"
                all="45"
                href="/collections/collection"
                img=<RecipeImg/>/>
              </UserPostContainer>
            </div>
            </Tabs>
          </Block>
      </BaseLayout>
    );
  }
}
export default UserPage;
