import React from "react";
import Link from "next/link";

import BaseLayout from "@components/layout/BaseLayout";
import Column from "@components/column/Column";
import CollectionContainer from "@components/activity/CollectionContainer";
import LikeContainer from "@components/activity/LikeContainer";
import ReviewContainer from "@components/activity/ReviewContainer";

class Activity extends React.Component {
  render() {
    return (
      <BaseLayout>
        <div id="page">
          <Column col2>
            <div className="activity-list">
              <LikeContainer
                user="ケリー小田"
                recipe="ゴルゴンゾーラとトマトのカプレーゼ"
                img="images/mock/food.jpg"
                date="14m"
              />
              <CollectionContainer
                user="ミッシェル"
                recipe="豚の角煮"
                date="20h"
                img="images/mock/food.jpg"
              />
              <ReviewContainer
                user="坂東英二"
                recipe="絶品！ゆで卵"
                date="5d"
                img="images/mock/food.jpg"
              >
                美味しいです。ご飯にも合う味でした！もう一品欲しいときに便利！
              </ReviewContainer>
              <LikeContainer
                user="ケリー小田"
                recipe="ゴルゴンゾーラとトマトのカプレーゼ"
                date="6d"
                img="images/mock/food.jpg"
              />
              <CollectionContainer
                user="ミッシェル"
                recipe="豚の角煮"
                date="1w"
                img="images/mock/food.jpg"
              />
            </div>
          </Column>
        </div>
      </BaseLayout>
    );
  }
}

export default Activity;
