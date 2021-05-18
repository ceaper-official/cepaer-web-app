"use strict";

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const firestore = admin.firestore();

exports.onUsersPostCreate = functions
.region("asia-northeast1")
.firestore.document("/users/{userId}/RecipePosts/{postId}")
.onCreate(async (snapshot, context) => {
  await copyToRootWithUsersRecipePostsnapshot(snapshot, context);
});
exports.onUsersPostUpdate = functions
.region("asia-northeast1")
.firestore.document("/users/{userId}/RecipePosts/{postId}")
.onUpdate(async (change, context) => {
  await copyToRootWithUsersRecipePostsnapshot(change.after, context);
});

async function copyToRootWithUsersRecipePostsnapshot(snapshot, context) {
  const postId = snapshot.id;
  const userId = context.params.userId;
  const post = snapshot.data();
  post.authorRef = firestore.collection("users").doc(userId);
  await firestore.collection("RecipePosts").doc(postId).set(post, { merge: true });
}