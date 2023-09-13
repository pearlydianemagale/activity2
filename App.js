import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { styles } from "./stlyesheet/style.js";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/Feather";
import Icons1 from "react-native-vector-icons/Ionicons";
import Icons2 from "react-native-vector-icons/Entypo";
import Icons3 from "react-native-vector-icons/Octicons";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.nav}>
          <Text style={styles.txt}>j</Text>
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.txt1}>Google</Text>
      </View>
      <View style={styles.search}>
        <Text style={styles.seacrhtxt}>Search</Text>
        <View style={styles.icons}>
          <Icons name="mic" size={20} color={"#4286f5"}></Icons>
          <Icons name="camera" size={20} color={"#4286f5"}></Icons>
        </View>
      </View>
      <View style={styles.col}>
        <View style={styles.col1}>
          <View style={styles.box1}>
            <View style={styles.icn}>
              <Icon name="tago" size={15} style={styles.icon1}></Icon>
            </View>
            <View style={styles.col1txt}>
              <Text style={styles.txts}>Shop for products</Text>
              <Text style={styles.txts2}>IN YOUR SREENSHOTS</Text>
            </View>
          </View>
        </View>
        <View style={styles.col2}>
          <View style={styles.box1}>
            <View style={styles.icn}>
              <Icons1 name="language" size={15} style={styles.icon1}></Icons1>
            </View>
            <View style={styles.col1txt}>
              <Text style={styles.txts}>Translate text</Text>
              <Text style={styles.txts2}>WITH YOUR CAMERA</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.line}></View>

      <View style={styles.centerbox}>
        <View style={styles.place}>
          <Text style={styles.tagb}>Balilihan</Text>
          <Text style={styles.init}>Mostly cloudy 40%</Text>
        </View>
        <View style={styles.cloud}>
          <Text style={styles.num}>87°F</Text>
          <Icons2 name="cloud" size={20} color={"grey"}></Icons2>
        </View>
      </View>
      <Image
        style={styles.img1}
        source={require("./stlyesheet/images/lebron.png")}
      />
      <View>
        <Text style={styles.dis}>
          Lakers: Lebron James reacts to heartwarming{"\n"}Austin Reaves-Dennis Schroder moment
        </Text>
      </View>
    
      <View style={styles.mid}>
        <Text style={styles.cpoint}>ClutchPoints 7h</Text>
        <View style={styles.midicon}>
        <Icon name="hearto" size={15} color={"white"}></Icon>
        <Icon name="sharealt" size={15} color={"white"}></Icon>
        <Icons2 name="dots-three-vertical" size={15} color={"white"}></Icons2>
        </View>
      </View>

      <Text style={styles.lrn}>Learn more about</Text>

      <View style={styles.mainfooter}>
        <View style={styles.footer}>
          <View style={styles.dis1}>
            <Icons3 name="north-star" size={20} color={"#4286f5"}></Icons3>
            <Text style={styles.txtd3}>Discover</Text>
          </View>
          <View style={styles.dis2}>
            <Icons name="search" size={20} color={"black"}></Icons>
            <Text style={styles.txtd1}>Search</Text>
          </View>
          <View style={styles.dis3}>
            <Icons1 name="bookmarks-outline" size={20} color={"black"}></Icons1>
            <Text style={styles.txtd1}>Saved</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
