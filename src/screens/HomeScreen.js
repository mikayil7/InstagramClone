import React,{useEffect,useState} from "react";
import { SafeAreaView, StyleSheet, ScrollView, Text, View } from "react-native";
import { db } from "../../firebase";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { POSTS } from "../data/posts";


const HomeScreen = ({ navigation }) => {
  const[posts,setPosts] = useState([])
useEffect(()=>{
  db.collectionGroup('posts').onSnapshot(snapshot=>{
    setPosts(snapshot.docs.map(post=>({ id: post.id , ...post.data() })))
  })
},[])

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView style={{ marginBottom: 50 }}>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //marginTop: 30,
    flex: 1,
    backgroundColor:'black'
  },
});

export default HomeScreen;
