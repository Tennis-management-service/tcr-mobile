
import React, {createRef, useState, useEffect}from 'react'
import { View, Image, TouchableOpacity, StyleSheet, LayoutAnimation, FlatList, Platform, UIManager } from 'react-native';
import { Dimensions } from 'react-native';
import { Indicator } from './indicator';




  
 const Children = ({

    item,
    style,
    index,
    // onPress,
    // index,
    imageUrl,

 }) => {
    return (
      <TouchableOpacity
        style={style.touchableOpacity}
        // onPress={() => onPress(index)}
        >
        <Image 
          style={[style.image]}
          //If image is local render it with item. if it is url it needs to use URI.
          source={{uri: imageUrl}}
        />
      </TouchableOpacity>
    )
  }

  // It creates indicator under picture slider 




export const FlatlistImageSlider = ({props}) => {

  

   const [index, setIndex] = useState (0);
  // const [sliderTimer, setSliderTimer] = useState(0);
  // const [data, setData] = useState({});

  // setData(props.data);

 const slider = createRef();
 const ItemWidth = props.screenWidth;
 const separatorWidth = props.separatorWidth;
 const totalItemWidth = ItemWidth + separatorWidth;


 useEffect(() => {
  
 });


//  if(Platform.OS === 'android'){
//   UIManager.setLayoutAnimationEnabledExperimental(true);
// }

// const onViewableItemsChanged = ({viewableItems, changed}) => {
//   if(viewableItems.length > 0){
//     let currentIndex = viewableItems[0].index;
//     if(
//       currentIndex % props.data.length === props.data.length -1 &&
//       props.loop 
//     ){
//       setIndex({
//         index: currentIndex,
//         data: [data, ...props.data],
//       })
//     } else {
//       setIndex({index: currentIndex});
//     }
//   }
//     if (props.currentIndexCallback){
//       props.currentIndexCallback(currentIndex);
//     }
// }

// const changeSliderListIndex = () => {
//   if(props.animation){
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//   }
//   setIndex({index: index +1});
//   slider.current.scrollToIndex({
//     index: index,
//     animated: true,
//   });

// };

//Started Auto play images. Not complete. Stays in the code 
// to finish later.
// const startAutoPlay = () =>{
  
  
//   setSliderTimer(setInterval(
//     changeSliderListIndex,
//     props.timer
//   ))
// }

// Started AutoPlay images. Not complete. Stays in the code
// to finish alter.
// const stopAutoPlay = () => {
//   if(sliderTimer) {
//     clearInterval()
//   }
// }


  return (
    <View style={styles.container}>
    

        <FlatList
          style={styles.flatlist}
          horizontal={true}
          data={props.data}
          pagingEnabled={true}
          windowSize={1}
          bounces={false}
          decelerationRate={'fast'}
          snapToInterval={totalItemWidth}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          removeClippedSubviews={true}
          //onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{viewAreaCoveragePercentThreshold: 50,}}
          getItemLayout={(data, index) => ({
            length: totalItemWidth,
            offset: totalItemWidth * index,
            index,
          })}
          keyExtractor={(item, index) => 
            item.id + index}
          renderItem={({item, index}) => {
            console.log(item.image);
            return (
              <Children style={ChildrenStyle} imageUrl={item.image} />
            )
          }}
          ItemSeparatorComponent={() => {
            return <View style={{height: "100%" }}/>
          }}
          
      />

          
      <View>
        <Indicator
            itemCount={props.data.length}
            currentIndex={index % props.data.length}
            indicatorStyle={props.indicatorStyle}
            indicatorContainerStyle={[
              styles.indicatorContainerStyle,
              props.indicatorContainerStyle
            ]}
            indicatorActiveColor={props.indicatorActiveColor}
            indicatorInActiveColor={props.indicatorInActiveColor}
            indicatorActiveWidth={props.indicatorActiveWidth}
            style={{...styles.indicator, ...props.indicatorStyle}}
          />
        
      </View>
      
        
        

    </View>
  )



}
const {width} = Dimensions.get('window');

const ChildrenStyle = StyleSheet.create({
  
  flatlist:{

  },
  touchableOpacity:{

  },
  image: {
    width: width,
    height: "100%",
    resizeMode: 'stretch',
  }
})


const styles = StyleSheet.create({
  container:{
    height: "40%",

  },
  flatlist:{
    flex: 1,
    height: "100%",
  },
  indicatorContainerStyle: {
    marginTop: 18,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },
})


const IndicatorStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5,
  },
  active: {},
  inactive: {},
})



