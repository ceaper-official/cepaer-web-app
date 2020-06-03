import BaseLayout from "../layouts/base.js";
import Link from "next/link";
import Message from "../assets/icons/ui/message.js";
import Notice from "../assets/icons/ui/notice.js";
import TroubleColor from "../assets/icons/ui/trouble-color.js";
import OtherColor from "../assets/icons/ui/other-color.js";
import DiscontentColor from "../assets/icons/ui/discontent-color.js";
export default () => (
  <BaseLayout>
    <div id="page">
      <div className="contents bg-red80">
        <div className="section center-section">
          <h1 className="title white">アカウントの削除</h1>
          <p className="white" style={{ marginBottom: 0 }}>
            下記の手順に沿って、アカウントの削除の手続きを進めてください。なお、アカウントを削除する場合、これまでに投稿したレシピなどのアクティビティが全て削除されます。再度アカウントを作成する場合、以前無効にしたアカウントを使用・復旧する事は一切できません。また、その間に他のユーザーの方が、削除したユーザー名を使用できる為、以前使用していたユーザー名が使えない場合がございます。予めご了承ください。
          </p>
        </div>
      </div>
      <div className="contents">
        <div className="section center-section">
          {/*アクションを起こすと、次の項目が表示*/}
          <div className="feedback-wrapper">
            <h5 className="hr-section-title">削除する理由を選んでください</h5>
            <div className="form-select">
              <a className="icon-button ico select-button select-button-bottom ico-big card">
                <DiscontentColor />
                サービスの不満
              </a>
              <a className="icon-button ico select-button select-button-bottom ico-big card">
                <TroubleColor />
                トラブルの発生
              </a>
              <a className="icon-button ico select-button select-button-bottom ico-big card">
                {" "}
                <OtherColor />
                その他
              </a>
            </div>
          </div>

          <div className="feedback-wrapper">
            <h5 className="hr-section-title">
              内容を詳しくお話しください（任意）
            </h5>
            <div className="form-select">
              <textarea
                className="feedback-area"
                placeholder="例：サービスが使いにくく不便..."
              ></textarea>
            </div>
            <div className="button-choice-wrapper">
              <Link href="/edit">
                <a className="button button-cancel button-choice-l">
                  キャンセルする
                </a>
              </Link>

              <a className="button  button-red button-choice-r ico">
                <Notice />
                アカウントを削除
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
);
