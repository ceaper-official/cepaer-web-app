import { getCurrentUser } from "@lib/firebase";
import { firebase } from "@src/firebase";

import BaseLayout from "@components/layout/BaseLayout";
import HeroUser from "@components/hero/HeroUser";
import Block from "@components/block/Block";
import UserPostContainer from "@components/user/UserPostContainer";
import UserPost from "@components/user/UserPost";
import UserCollection from "@components/user/Usercollection";
import Tabs from "@components/tabs/Tabs";

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
      facebook: "",
      twitter: "",
      instagram: "",
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
            facebook: data.facebook,
            twitter: data.twitter,
            instagram: data.instagram,
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
          instagram={`https://www.instagram.com/${this.state.instagram}`}
          twitter={`https://twitter.com/${this.state.twitter}`}
          facebook={`https://www.facebook.com/${this.state.facebook}`}
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
