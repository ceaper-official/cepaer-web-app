import React from "react";
import Link from "next/link";
import Logo from "../../assets/logo.js";
import Search from "../../assets/icons/ui/search.js";
import Share from "../../assets/icons/ui/share.js";
import Like from "../../assets/icons/ui/like.js";
import Add from "../../assets/icons/ui/add.js";
import NavApp from "../../layouts/nav_app.js";
import Router from "next/router";
import Back from "../../assets/icons/ui/back.js";
import Cross from "../../assets/icons/ui/cross.js";

function User() {
  return <img src="images/default/user.svg" alt="user image" />;
}
function RecipeImg() {
  return <img src="images/mock/food.jpg" alt="recipe image" />;
}

class RecipeHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    return (
      <div>
        <div id="header">
          <div id="desktop-nav">
            <div className="nav-container">
              <div className="nav-inner nav-inner-desktop">
                <div className="nav-controls">
                  <div className="search-wrapper">
                    <span className="search-icon">
                      <span className="search-icon-inner">
                        <Search />
                      </span>
                    </span>
                    <input
                      className="search"
                      type="search"
                      name="q"
                      placeholder="料理、材料、キャンプ道具..."
                    />
                  </div>
                </div>
                <div className="nav-controls">
                  {/* アイコンは、アクティブ時 class付与（色変更） */}
                  {/* シェア */}
                  <button className="header-icon" id="recipe-share">
                    <Share />
                  </button>
                  {/* ライク　アクティブ時 <button>にclass"active"付与 。非アクティブはクラス解除*/}
                  <button className="header-icon active like" id="recipe-like">
                    <Like />
                  </button>
                  {/* コレクション */}
                  <button
                    className="header-icon"
                    id="recipe-collection"
                    onClick={this.togglePopup.bind(this)}
                  >
                    <Add />
                  </button>
                  {this.state.showPopup ? (
                    <Popup closePopup={this.togglePopup.bind(this)} />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="app-header" className="bg-white">
          <HeaderApp />
        </div>
        <div id="app-nav">
          <NavApp />
        </div>
      </div>
    );
  }
}

export default RecipeHeader;

class HeaderApp extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    return (
      <div>
        <div className="section">
          <div className="app-header-wrapper">
            <div className="app-header-inner" onClick={() => Router.back()}>
              {/* ホームページ時は、visibility:hidden */}
              <Back />
            </div>
            <div className="app-header-inner">
              {/* シェア */}
              <button className="app-header-icon" id="recipe-share">
                <Share />
              </button>
              {/* ライク　アクティブ時 <button>にclass"active"付与 。非アクティブはクラス解除*/}
              <button className="app-header-icon active like" id="recipe-like">
                <Like />
              </button>
              {/* コレクション */}
              <button
                className="app-header-icon"
                id="recipe-collection"
                onClick={this.togglePopup.bind(this)}
              >
                <Add />
              </button>
              {this.state.showPopup ? (
                <Popup closePopup={this.togglePopup.bind(this)} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Popup extends React.Component {
  render() {
    return (
      <div className="popup-row" id="added-collection">
        <div className="popup-row-bg" onClick={this.props.closePopup}></div>
        <div className="popup-wrapper">
          <div className="popup-inner card">
            <button className="popup-row-close" onClick={this.props.closePopup}>
              <Cross />
            </button>
            <h1>コレクションに追加</h1>
            <div className="user-collection-row">
              {/* ユーザーのコレクション全表示 */}
              {/*追加ずみの場合、class"added" 付与。クリックで、コレクション解除+class外れる*/}
              <a className="user-collection card">
                <div className="collection-img">
                  <RecipeImg />
                </div>
                <div className="collection-text">
                  <h1 className="collection-title">
                    ダイエットに効果的な料理100選
                  </h1>
                  <p className="collection-data">
                    <span>30</span>レシピ
                  </p>
                </div>
              </a>
              <a className="user-collection card">
                <div className="collection-img">
                  <RecipeImg />
                </div>
                <div className="collection-text">
                  <h1 className="collection-title">
                    紅葉の秋！ 今食べたい秋の魚レシピまとめ100選 2020スペシャル
                  </h1>
                  <p className="collection-data">
                    <span>30</span>レシピ
                  </p>
                </div>
              </a>
              <a className="user-collection card added">
                <div className="collection-img">
                  <RecipeImg />
                </div>
                <div className="collection-text">
                  <h1 className="collection-title">
                    食欲の秋 秋の味覚を楽しむレシピ特集
                  </h1>
                  <p className="collection-data">
                    <span>30</span>レシピ
                  </p>
                </div>
              </a>
              <a className="user-collection card">
                <div className="collection-img">
                  <RecipeImg />
                </div>
                <div className="collection-text">
                  <h1 className="collection-title">
                    旬を食べ尽くす！ 春に食べたい野菜のレシピまとめ
                  </h1>
                  <p className="collection-data">
                    <span>30</span>レシピ
                  </p>
                </div>
              </a>
            </div>

            <button id="create-collection" className="button-ol">
              新しいコレクションを作成
            </button>
          </div>
        </div>
        <style jsx>{`
          .popup-inner {
            max-width: 500px;
          }
        `}</style>
      </div>
    );
  }
}

class CreateCollection extends React.Component {
  render() {
    return (
      <div className="popup-row" id="create-collection">
        <div className="popup-row-bg" onClick={this.props.closePopup}></div>
        <div className="popup-wrapper">
          <div className="popup-inner card">
            <button className="popup-row-close" onClick={this.props.closePopup}>
              <Cross />
            </button>
            <h1>コレクションを新規作成</h1>
            {/* ボタン押したら、コンポーネント"CreateCollection"を閉じる */}
            <button className="button-ol">コレクションを作成</button>
          </div>
        </div>
        <style jsx>{`
          .popup-inner {
            max-width: 500px;
          }
          #added-collection {
            display: none;
          }
        `}</style>
      </div>
    );
  }
}
