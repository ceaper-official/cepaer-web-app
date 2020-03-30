import { db } from '../lib/db';
import React from 'react'

 export default class Posts extends React.Component {
  static async getInitialProps() {
    // db.jsのfirebaseのDB接続ファンクション
    // DBのpostsコレクション内を全て取得した結果 = result
    let result = await new Promise((resolve, reject) => {
      db.collection('posts')
      .get()
      .then(snapshot => {
        let data = []
        snapshot.forEach((doc) => {
          data.push(
            Object.assign({
              id: doc.id
            }, doc.data())
          )
        })
        resolve(data)
      }).catch(error => {
        reject([])
      })
    })
    return {posts: result}
  }

  handleDelete = (id) => {
    console.log(id)
  }

  render() {
    const posts = this.props.posts
    return (
        <React.Fragment>
                {posts.map(post =>
                    <div class="post" key={post.id}>
                        <h2>
                            {post.title}
                        </h2>
                        <p>
                            {post.body}
                        </p>
                        <button onClick={this.handleDelete.bind(this, post.id)}>削除</button>
                    </div>
                    )}
            <style jsx>{`
            .post {
                width: 40%;
                border: 1px solid black;
                background-color: gray;
                margin-bottom: 10px;
            }
            `}</style>
        </React.Fragment>
    );
  }
}
