import React, { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/material-sharp/452/home.png",
    inactive: "https://img.icons8.com/material-outlined/452/home--v2.png",
  },

  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/452/search--v2.png",
    inactive: "https://img.icons8.com/ios/452/search--v1.png",
  },

  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/452/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/452/instagram-reel.png",
  },

  {
    name: "Shop",
    active: "https://img.icons8.com/fluency-systems-filled/452/shop-two.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/452/shop-two--v1.png",
  },

  {
    name: "Profile",
    active:
      "https://scontent.fgyd8-1.fna.fbcdn.net/v/t39.30808-6/264590613_2135015009986427_6392118390072250844_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Kvt88I4KbYIAX8q2_aE&_nc_ht=scontent.fgyd8-1.fna&oh=00_AT91r09ZenTL8cltisfRAjfyePlXCIqFgf5IJf_J9gx4Fg&oe=61D2322C",
    inactive:
      "https://scontent.fgyd8-1.fna.fbcdn.net/v/t39.30808-6/264590613_2135015009986427_6392118390072250844_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Kvt88I4KbYIAX8q2_aE&_nc_ht=scontent.fgyd8-1.fna&oh=00_AT91r09ZenTL8cltisfRAjfyePlXCIqFgf5IJf_J9gx4Fg&oe=61D2322C",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "0.01%",
    zIndex: 999,
    backgroundColor: "#000",
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },

  icon: {
    width: 30,
    height: 30,
    tintColor: "white",
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
    //tintColor:'transparent',
  }),
});

export default BottomTabs;
