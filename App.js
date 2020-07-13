/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const screenWidth = Dimensions.get('window').width;
const totalPadding = 40;
const numberColumn = 2;
const cellMargin = 5;
const cellWidth = ((screenWidth - totalPadding) / numberColumn) - 10;
const LIST_IMAGE_URL = [
  {uri: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {uri: 'https://www.thewowstyle.com/wp-content/uploads/2015/02/Beautiful-Wallpapers-14.jpg'},
  {uri: 'https://i.pinimg.com/originals/d3/ee/19/d3ee1920a20ba968396e772dfcebcb04.png'},
  {uri: 'https://thumbs.dreamstime.com/b/young-beautiful-redhead-girl-spring-flower-garden-woman-long-red-hair-retro-dress-nature-smell-cherry-tree-stylish-164513519.jpg'},
  {uri: 'https://i.pinimg.com/236x/11/56/3c/11563cacc2ea8e5e091835bf7444a6c7.jpg'},
  {uri: 'https://images.unsplash.com/photo-1466838931486-92f3b5ff31a6?ixlib=rb-1.2.1&w=1000&q=80'},
  {uri: 'https://image.vovworld.vn/w500/Uploaded/vovworld/vjryqdxwp/2017_06_01/cualo2_ERTK.jpg'},
  {uri: 'https://www.vir.com.vn/stores/news_dataimages/hung/072019/26/10/in_article/ha-long-bay-enters-top-10-most-beautiful-sunrise-spots.jpg'},
  {uri: 'https://i.pinimg.com/236x/af/82/b3/af82b361cccd169344a62c9b8040e740.jpg'},
  
]
const App: () => React$Node = () => {
  const imgListInRowFirst = LIST_IMAGE_URL.slice(0, Math.round(LIST_IMAGE_URL.length / 2));
  const imgListInRowSecond = LIST_IMAGE_URL.slice(Math.round(LIST_IMAGE_URL.length / 2));
  return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{padding: 20, flexDirection: 'row'}}>
          <View>
          { imgListInRowFirst.map((item, index) => <FeedItem imageUri={item} index={index}/>)}
          </View>
          <View>
          { imgListInRowSecond.map((item, index) => <FeedItem imageUri={item} index={index}/>)}
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};

const FeedItem = ({ imageUri, index }) => {
  const [imageHeight, setImageHeight] = useState(100);
  const imageWidth = cellWidth;
  Image.getSize(imageUri.uri, (width, height) => {
        const aspectRatio = height / width;
        setImageHeight(aspectRatio * imageWidth);
  })
  const marginStyle = index % 2 === 0 ? {marginRight: cellMargin} : {marginRight: cellMargin}
  return (
    <Image
      key={index}
      source={imageUri}
      style={[styles.image, { width: imageWidth, height: imageHeight, marginBottom: 5, borderRadius: 10 },marginStyle]}
    />
  )
}


const styles = StyleSheet.create({
  avatarWrapper: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green'
},
image: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#fff'
},
});

export default App;
