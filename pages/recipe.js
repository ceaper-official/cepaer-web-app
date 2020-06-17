import RecipeLayout from "../layouts/base/base-recipe.js";
import Link from "next/link";
import StarSolid from "../assets/icons/ui/star-solid.js";
import ShareSolid from "../assets/icons/ui/share-solid.js";
import Add from "../assets/icons/ui/add.js";
import Minus from "../assets/icons/ui/minus.js";
import TimeSolid from "../assets/icons/ui/time-solid.js";
import CookSolid from "../assets/icons/ui/cook-solid.js";
import Message from "../assets/icons/ui/message.js";
import Arrow from "../assets/icons/ui/arrow.js";
import UserShot from "../layouts/shots/shot.js";
import Review from "../layouts/reviews/review.js";
import Router from "next/router";

function UserImg() {
  return <img src="images/default/user.svg" alt="ユーザー　アイコン" />;
}

function FoodImg() {
  return <img src="images/mock/food.svg" alt="レシピ料理" />;
}

export default () => (
  <RecipeLayout>
    <div id="page">
      {/* ヒーロー */}
      <div className="contents" id="recipe-hero">
        <div className="section">
          <div className="recipe-wrapper">
            <a
              onClick={() => Router.back()}
              className="recipe-back-page ico-button"
            >
              <Arrow />
            </a>

            <div className="recipe-inner">
              <div id="recipe-img">
                <FoodImg />
              </div>
            </div>

            <div className="recipe-bio-wrapper">
              <div className="recipe-bio">
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
                  <span className="margin">・</span>
                  <div className="rating">
                    {/*数値計算*/}
                    <span className="ico">
                      <StarSolid />
                    </span>
                    <h6 id="rating-data">4.3</h6>
                    <h6 id="reviews-data">(100)</h6>
                  </div>
                </div>

                <div id="recipe-hero-data">
                  {/*数値計算*/}
                  <div>
                    <h6 id="time-data">20m</h6>
                    <span>調理時間</span>
                  </div>
                  <div>
                    <h6 id="time-data">7</h6>
                    <span>材料数</span>
                  </div>
                  <div>
                    <h6 id="time-data">94</h6>
                    <span>作られた数</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contents">
        <div className="section">
          <div className="recipe-summary-wrapper">
            <div className="recipe-bio-inner">
              <h6>レシピについて</h6>
              <p>
                ミニトマト、ゴルゴンゾーラをシンプルに、オリーブオイルと塩で和えました。最後に散らしたバジルが味のアクセントとなっております。見た目もかわいらしく、おもてなし料理としてもぴったりです。冷蔵庫で冷たく冷やしてお召し上がり下さい。
              </p>

              <div className="recipe-bio-inner">
                <h6>キャンプ道具</h6>
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

            <div className="recipe-bio-inner">
              <div className="flex">
                <h6>材料</h6>
                <h4 className="servings ico xs-text w-auto">
                  {/* 人数 */}
                  <span id="servings-data" className="w-auto">
                    2人分
                  </span>
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
        </div>
      </div>

      {/* 作り方 */}
      <div className="contents section-contents">
        <div className="section">
          <h3 className="recipe-section-title section-title">作り方</h3>
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
      <div className="contents section-contents" id="review">
        <div className="section">
          <div className="section-title-2ol">
            <h3 className="recipe-section-title section-title">
              <div className="rating">
                <span className="ico">
                  <StarSolid />
                </span>
                <span id="rating-data">4.3</span>
                <span id="reviews-data">(100)</span>
              </div>
            </h3>
            <a className="hover-accent section-link recipe-section-title">
              全てのレビューを見る
            </a>
          </div>
        </div>
        <div className="slide-shot">
          <div className="slide-wrapper">
            {/* レビュー一覧・10件表示 */}
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
      </div>

      {/* 関連するレシピ・10件表示 */}
      <div className="contents section-contents">
        <div className="section">
          <h3 className="recipe-section-title section-title">関連するレシピ</h3>
        </div>
        <div className="slide-shot">
          <div className="slide-wrapper">
            <UserShot />
            <UserShot />
            <UserShot />
            <UserShot />
            <UserShot />
            <UserShot />
            <UserShot />
            <UserShot />
            <UserShot />
            <UserShot />
          </div>
        </div>
      </div>
      <style jsx>{`
        #servings-data {
          white-space: nowrap;
        }
      `}</style>
    </div>
  </RecipeLayout>
);
