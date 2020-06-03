import BaseLayout from "../layouts/base.js";
import Link from "next/link";
import StarSolid from "../assets/icons/ui/star-solid.js";
import ShareSolid from "../assets/icons/ui/share-solid.js";
import Add from "../assets/icons/ui/add.js";
import Minus from "../assets/icons/ui/minus.js";
import TimeSolid from "../assets/icons/ui/time-solid.js";
import CookSolid from "../assets/icons/ui/cook-solid.js";
import Message from "../assets/icons/ui/message.js";
import Rate5 from "../assets/icons/ui/rate5.js";
import Rate4 from "../assets/icons/ui/rate4.js";
import Rate3 from "../assets/icons/ui/rate3.js";
import Rate2 from "../assets/icons/ui/rate2.js";
import Rate1 from "../assets/icons/ui/rate1.js";

function UserImg() {
  return <img src="images/default/user.jpg" alt="ユーザー　アイコン" />;
}

function FoodImg() {
  return <img src="images/mock/food.jpg" alt="レシピ料理" />;
}

export default () => (
  <BaseLayout>
    <div id="page">
      {/* ヒーロー */}
      <div className="contents" id="recipe-hero">
        <div className="section">
          <div className="recipe-wrapper">
            <div className="recipe-inner1">
              <div className="border-radius recipe-img-inner">
                <FoodImg />
                <div
                  className="recipe-actions"
                  style={{
                    paddingBottom: 0,
                  }}
                >
                  {/* 追加済の場合、クラス追加 */}
                  <a className="button ico action-star button-white xs-text">
                    <StarSolid />
                    <span>お気に入り</span>
                  </a>
                  <a className="button ico action-share  button-white xs-text">
                    <ShareSolid />
                    <span>共有</span>
                  </a>
                </div>
              </div>
              <h1>ゴルゴンゾーラとトマトのカプレーゼ</h1>
              <div className="recipe-inner">
                <a className="user-link">
                  <div className="user-container">
                    <div className="user-avatar user-inner">
                      <UserImg />
                    </div>
                    <div className="user-inner">
                      <p className="user-text name">ケリー小田</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="recipe-hr"></div>
              <div className="recipe-bio-wrapper">
                <div className="recipe-bio-inner1">
                  <div>
                    <div className="flex">
                      <h4 className="section-title">材料</h4>
                      <h4 className="servings ico xs-text w-auto">
                        {/* 数によって、材料の量が変更  最小：1 最大：10？ */}
                        <h4
                          style={{
                            margin: 0,
                          }}
                          className="xs-text w-auto"
                        >
                          人数：
                        </h4>
                        <button className="ico button-active">
                          <Minus />
                        </button>
                        <span className="button-active-number">2</span>
                        <button className="ico button-active">
                          <Add />
                        </button>
                      </h4>
                    </div>
                    <div className="ingredients-wrapper xs-text">
                      {/* 入力の際、文字数制限：数量（〜5 */}
                      <span>1個</span>
                      <span className="ingredient">トマト</span>
                      <span>100g</span>
                      <span className="ingredient">ゴルゴンゾーラ</span>
                      <span>6枚</span>
                      <span className="ingredient">バジル</span>
                      <span>大さじ1</span>
                      <span className="ingredient">オリーブオイル</span>
                      <span>少々</span>
                      <span className="ingredient">塩</span>
                      <span>少々</span>
                      <span className="ingredient">黒こしょう</span>
                    </div>
                  </div>
                </div>

                <div className="recipe-bio-inner2">
                  <h4 className="section-title">キャンプ道具</h4>
                  <div className="camp-wrapper tag-camp">
                    {/* タグに関連づけたレシピ一覧へリンク */}
                    <Link href="/">
                      <a>BBQグリル</a>
                    </Link>
                    <Link href="/">
                      <a>BBQグリル</a>
                    </Link>
                    <Link href="/">
                      <a>BBQグリル</a>
                    </Link>
                    <Link href="/">
                      <a>BBQグリル</a>
                    </Link>
                    <Link href="/">
                      <a>BBQグリル</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="recipe-bio-inner3">
                <div className="recipe-hr"></div>
                <p>
                  ミニトマト、ゴルゴンゾーラをシンプルに、オリーブオイルと塩で和えました。最後に散らしたバジルが味のアクセントとなっております。見た目もかわいらしく、おもてなし料理としてもぴったりです。冷蔵庫で冷たく冷やしてお召し上がり下さい。
                </p>
              </div>
              <div className="recipe-hr recipe-hr-desktop"></div>
            </div>

            {/* データ取得 */}
            <div className="recipe-bio-nav">
              <div
                className="card"
                style={{
                  padding: 0,
                }}
              >
                <div className="recipe-bio-content">
                  <div className="rating">
                    <div className="star star4">★★★★</div>
                    <div className="star-bg">★★★★★</div>
                  </div>
                </div>
                <div className="recipe-hr"></div>

                <div className="recipe-bio-content">
                  <div className="ico s-text">
                    <TimeSolid />
                    <span>12分</span>
                  </div>
                  <div className="ico s-text">
                    <CookSolid />
                    <span>1135</span>
                  </div>
                </div>

                <div className="recipe-hr"></div>

                <div className="recipe-bio-content">
                  <a className="button action-make-button icon-button button-black-ol">
                    クッキングリストに追加
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 作り方 */}
      <div className="contents">
        <div className="section">
          <div className="recipe-section-title-wrapper review hr-section-title">
            <div className="recipe-section-title">作り方</div>
          </div>
          <div className="make-wrapper">
            {/* データ取得・作り方 */}
            <div className="make-inner bg-grey card card-wrapper">
              <p>
                お皿に1、2、バジルを交互に並べます。オリーブオイルをかけ、塩と黒こしょうをふって完成です。
              </p>
            </div>
            <div className="make-inner bg-grey card card-wrapper">
              <p>
                お皿に1、2、バジルを交互に並べます。オリーブオイルをかけ、塩と黒こしょうをふって完成です。
              </p>
            </div>
            <div className="make-inner bg-grey card card-wrapper">
              <p>
                お皿に1、2、バジルを交互に並べます。オリーブオイルをかけ、塩と黒こしょうをふって完成です。
              </p>
            </div>
            <div className="make-inner bg-grey card card-wrapper">
              <p>
                お皿に1、2、バジルを交互に並べます。オリーブオイルをかけ、塩と黒こしょうをふって完成です。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* レビュー一覧 */}
      <div className="contents" id="review">
        <div className="section">
          <div className="recipe-section-title-wrapper review  hr-section-title">
            <div className="recipe-section-title">
              レビュー（514）
              <div className="rating">
                <div className="star star4">★★★★</div>
                <div className="star-bg">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section"
          style={{
            paddingRight: 0,
          }}
        >
          <div className="review-wrapper">
            <div className="review shot card-wrapper card card-border">
              <div className="recipes-inner">
                <p className="s-text comment">
                  美味しいです。ご飯にも合う味でした！もう一品欲しいときに便利！
                </p>
                <a className="user-link">
                  <div className="user-container">
                    <div className="user-avatar user-inner">
                      <UserImg />
                    </div>
                    <div className="user-inner">
                      <p className="user-text name">ケリー小田</p>
                      <p
                        className="user-text date"
                        style={{
                          margin: 0,
                        }}
                      >
                        2020.06.12
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-link">
          <a className="hover-accent">
            <h4 className="small-text">全てのレビューを見る</h4>
          </a>
        </div>
      </div>

      {/* 関連するレシピ */}
      <div className="contents">
        <div className="section">
          <div className="recipe-section-title-wrapper review">
            <div className="recipe-section-title hr-section-title">
              関連するレシピ
            </div>
          </div>
        </div>
        <div className="section">
          <div className="shots-wrapper">{/* partial "shot.html" . */}</div>
        </div>
      </div>
    </div>
  </BaseLayout>
);
