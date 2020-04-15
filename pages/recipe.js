import BaseLayout from '../layouts/base.js'
import Link from 'next/link';
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
  return <img src="images/default/user.jpg" alt="ユーザー　アイコン"/>
}

function FoodImg() {
  return <img src="images/mock/food.jpg" alt="レシピ料理"/>
}

export default() => (<BaseLayout>
  <div id="page">

    {/* ヒーロー */}
    <div class="contents" id="recipe-hero">
      <div class="section">
        <div class="recipe-wrapper">
          <div class="recipe-inner1">
            <div class="border-radius recipe-img-inner">
              <FoodImg/>
              <div class="recipe-actions" style={{
                  paddingBottom: 0
                }}>
                {/* 追加済の場合、クラス追加 */}
                <a class="button ico action-star button-white xs-text"><StarSolid/>
                  <span>お気に入り</span>
                </a>
                <a class="button ico action-share  button-white xs-text"><ShareSolid/>
                  <span>共有</span>
                </a>
              </div>
            </div>
            <h1>ゴルゴンゾーラとトマトのカプレーゼ
            </h1>
            <div class="recipe-inner">
              <a class="user-link">
                <div class="user-container">
                  <div class="user-avatar user-inner">
                    <UserImg/>
                  </div>
                  <div class="user-inner">
                    <p class="user-text name">ケリー小田</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="recipe-hr"></div>
            <div class="recipe-bio-wrapper">

              <div class="recipe-bio-inner1">
                <div>
                  <div class="flex">
                    <h4 class="section-title">材料</h4>
                    <h4 class="servings ico xs-text w-auto">
                      {/* 数によって、材料の量が変更  最小：1 最大：10？ */}
                      <h4 style={{
                          margin: 0
                        }} class="xs-text w-auto">人数：
                      </h4>
                      <button class="ico button-active"><Minus/></button>
                      <span class="button-active-number">2</span>
                      <button class="ico button-active"><Add/></button>
                    </h4>
                  </div>
                  <div class="ingredients-wrapper xs-text">
                    {/* 入力の際、文字数制限：数量（〜5 */}
                    <span>1個</span>
                    <span class="ingredient">
                      トマト</span>
                    <span>100g</span>
                    <span class="ingredient">
                      ゴルゴンゾーラ</span>
                    <span>6枚</span>
                    <span class="ingredient">
                      バジル</span>
                    <span>大さじ1</span>
                    <span class="ingredient">
                      オリーブオイル</span>
                    <span>少々</span>
                    <span class="ingredient">塩</span>
                    <span>少々</span>
                    <span class="ingredient">黒こしょう</span>
                  </div>
                </div>
              </div>

              <div class="recipe-bio-inner2">
                <h4 class="section-title">キャンプ道具</h4>
                <div class="camp-wrapper tag-camp">
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

                          <div class="recipe-bio-inner3">
                            <div class="recipe-hr"></div>
                            <p>ミニトマト、ゴルゴンゾーラをシンプルに、オリーブオイルと塩で和えました。最後に散らしたバジルが味のアクセントとなっております。見た目もかわいらしく、おもてなし料理としてもぴったりです。冷蔵庫で冷たく冷やしてお召し上がり下さい。</p>
                          </div>
            <div class="recipe-hr recipe-hr-desktop"></div>
          </div>



          {/* データ取得 */}
          <div class="recipe-bio-nav">
            <div class="card"  style={{
                padding: 0
              }}>

              <div class="recipe-bio-content">
                <div class="rating">
                  <div class="star star4">
                    ★★★★
                  </div>
                  <div class="star-bg">
                    ★★★★★
                  </div>
                </div>
              </div>
              <div class="recipe-hr"></div>

              <div class="recipe-bio-content">
                <div class="ico s-text">
                  <TimeSolid/>
                  <span>12分</span>
                </div>
                <div class="ico s-text">
                  <CookSolid/>
                  <span>1135</span>
                </div>
              </div>

              <div class="recipe-hr"></div>

                <div class="recipe-bio-content">
                <a class="button action-make-button icon-button button-black-ol">クッキングリストに追加</a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    {/* 作り方 */}
    <div class="contents">
      <div class="section">
        <div class="recipe-section-title-wrapper review hr-section-title">
          <div class="recipe-section-title">
            作り方
          </div>
        </div>
        <div class="make-wrapper">
          {/* データ取得・作り方 */}
          <div class="make-inner bg-grey card card-wrapper">
            <p>お皿に1、2、バジルを交互に並べます。オリーブオイルをかけ、塩と黒こしょうをふって完成です。</p>
          </div>
          <div class="make-inner bg-grey card card-wrapper">
            <p>お皿に1、2、バジルを交互に並べます。オリーブオイルをかけ、塩と黒こしょうをふって完成です。</p>
          </div>
          <div class="make-inner bg-grey card card-wrapper">
            <p>お皿に1、2、バジルを交互に並べます。オリーブオイルをかけ、塩と黒こしょうをふって完成です。</p>
          </div>
          <div class="make-inner bg-grey card card-wrapper">
            <p>お皿に1、2、バジルを交互に並べます。オリーブオイルをかけ、塩と黒こしょうをふって完成です。</p>
          </div>
        </div>
      </div>
    </div>

    {/* レビュー一覧 */}
    <div class="contents" id="review">
      <div class="section">
        <div class="recipe-section-title-wrapper review  hr-section-title">
          <div class="recipe-section-title">
            レビュー（514）
            <div class="rating">
              <div class="star star4">
                ★★★★
              </div>
              <div class="star-bg">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section" style={{
          paddingRight: 0
        }}>
        <div class="review-wrapper">
          <div class="review shot card-wrapper card card-border">
            <div class="recipes-inner">
              <p class="s-text comment">美味しいです。ご飯にも合う味でした！もう一品欲しいときに便利！</p>
              <a class="user-link">
                <div class="user-container">
                  <div class="user-avatar user-inner">
                    <UserImg/>
                  </div>
                  <div class="user-inner">
                    <p class="user-text name">ケリー小田</p>
                    <p class="user-text date" style={{
                        margin: 0
                      }}>2020.06.12</p>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
      <div class="reviews-link">
        <a class="hover-accent">
          <h4 class="small-text">全てのレビューを見る</h4>
        </a>
      </div>
    </div>

    {/* 関連するレシピ */}
    <div class="contents">
      <div class="section">
        <div class="recipe-section-title-wrapper review">
          <div class="recipe-section-title hr-section-title">
            関連するレシピ
          </div>
        </div>
      </div>
      <div class="section">
        <div class="shots-wrapper">
          {/* partial "shot.html" . */}
        </div>
      </div>
    </div>

  </div>
</BaseLayout>)
