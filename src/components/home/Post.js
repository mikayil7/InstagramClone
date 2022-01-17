import React ,{useState,useEffect}from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import { db,firebase } from "../../../firebase";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl: "https://iconape.com/wp-content/files/er/76222/png/like-2.png",
    likedImageUrl:
      "https://www.clipartmax.com/png/full/58-587249_small-heart-icon-vector-instagram-like-icon-png.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://www.pinclipart.com/picdir/big/571-5717511_comment-instagram-icon-png-clipart.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://www.pngkit.com/png/full/188-1882778_icon-icon-icon-icon-instagram-share-icon-png.png",
  },
  {
    name: "Save",
    imageUrl:
      "https://freepngimg.com/download/instagram/60239-like-icons-bookmark-button-computer-facebook-instagram.png",
  },
];

const Post = ({ post }) => {
const handleLike = post=>{
  const currentLikeStatus = !post.likes_by_users.includes(
    firebase.auth().currentUser.email
  )

  db.collection('users')
  .doc(post.owner_email)
  .collection('posts')
  .doc(post.id)
  .update({
    likes_by_users : currentLikeStatus 
    ? firebase.firestore.FieldValue.arrayUnion(
      firebase.auth().currentUser.email
    )
    : firebase.firestore.FieldValue.arrayRemove(
      firebase.auth().currentUser.email
    ),
  })

.then(()=>{
  console.log('Document successfully updated')
})
.catch(error=>{
console.error('Error updating document:', error)
})
}

  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter post={post} handleLike={handleLike}/>
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>
    <Text style={{ color: "white", fontWeight: "700" }}>...</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View
    style={{
      width: "100%",
      height: 450,
    }}
  >
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({handleLike,post}) => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFooterIconsContainer}>
      <TouchableOpacity onPress={()=> handleLike(post)}>
      <Image style={styles.footerIcon} source={{uri: post.likes_by_users.includes(
        firebase.auth().currentUser.email ) ? postFooterIcons[0].likedImageUrl : postFooterIcons[0].imageUrl
      }} />
      </TouchableOpacity>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon
        imgStyle={[styles.footerIcon, styles.shareIcon]}
        imgUrl={postFooterIcons[2].imageUrl}
      />
    </View>

    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <Icon
        imgStyle={[styles.footerIcon, styles.saveIcon]}
        imgUrl={postFooterIcons[3].imageUrl}
      />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes_by_users.length.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        {post.comments.length > 1 ? "all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "600" }}> {comment.user}</Text>{" "}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ffff",
  },

  footerIcon: {
    width: 22,
    height: 22,
    tintColor: "white",
  },

  shareIcon: {
    transform: [{ rotate: "380deg" }],
    marginTop: -3,
  },

  saveIcon: {
    width: 28,
    height: 28,
  },

  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "22%",
    justifyContent: "space-between",
  },
});

export default Post;
