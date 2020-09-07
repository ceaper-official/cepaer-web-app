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
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      user: null,
      name: "",
      icon: "",
      bio: "",
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    const user = getCurrentUser();
    // TODO: Firestoreからユーザ情報を取得
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const doc = await db.collection("users").doc(user.uid).get();
        const data = doc.data();
        if (data) {
          this.setState({
            user,
            name: data.name,
            icon: data.thumgnailMediumImageUrl,
            bio: data.bio,
          });
        }
      }
    });
  }

  render() {
    const firestoreDatas = this.props.datas;
    return (
      <BaseLayout>
        <HeroUser
          name={this.state.name}
          icon={this.state.icon}
          bio={this.state.bio}
          instagram="https://www.instagram.com/"
          twitter="http://twitter.com/"
          facebook="http://facebook.com/"
        />

        <Block>
          <Tabs>
            <div label="投稿したレシピ" icon={<CookSolid />}>
              <UserPostContainer>
                <UserPost />
                <UserPost />
                <UserPost />
                <UserPost />
              </UserPostContainer>
            </div>
            <div label="お気に入り" icon={<LikeSolid />}>
              <UserPostContainer>
                <UserPost />
              </UserPostContainer>
            </div>
            <div label="コレクション" icon={<CollectionSolid />}>
              <UserPostContainer>
                <UserCollection
                  title="ダイエットに効果的な料理100選"
                  all="45"
                  href="/collections/collection"
                  img=<RecipeImg />
                />
              </UserPostContainer>
            </div>
          </Tabs>
        </Block>
      </BaseLayout>
    );
  }
}
export default UserPage;
