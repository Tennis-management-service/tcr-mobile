
import React, {createRef, useState, useEffect}from 'react'
import { View, Image, TouchableOpacity, StyleSheet, LayoutAnimation, FlatList, Platform, UIManager } from 'react-native';
import { Dimensions } from 'react-native';
import { Indicator } from './indicator';

const data = [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
    {
      id: '4',
      image:
        'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
    {
      id: '5',
      image:'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      desc:'Sample Description below the image for representation purpose only',
    },
  ];


  
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

 const slider = createRef();
 const ItemWidth = props.screenWidth;
 const separatorWidth = props.separatorWidth;
 const totalItemWidth = ItemWidth + separatorWidth;


 useEffect(() => {
  
 });


  return (
    <View style={styles.container}>
    

        <FlatList
          style={styles.flatlist}
          horizontal={true}
          data={data}
          pagingEnabled={true}
          windowSize={1}
          bounces={false}
          decelerationRate={'fast'}
          snapToInterval={totalItemWidth}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          removeClippedSubviews={true}
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
       
        
        {props.indicator ? ( 
        <Indicator
            itemCount={data.length}
            currentIndex={index % data.length}
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
          ) :(null)
        
        }

    </View>
  )

  if(Platform.OS === 'android'){
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }



  const changeSliderListIndex = () => {
    if(props.animation){
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    setIndex({index: props.index +1});
    slider.current.scrollToIndex({
      index: props.index,
      animated: true,
    });

  };


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





































// const ChildItem = ({item, onPress, index, imageKey, local, height}) => {
//     return (
//         <TouchableOpacity
//           style={ChildItemstyles.container}
//           onPress={() => onPress(index)}>
//           <Image
//             style={[ChildItemstyles.image, ChildItemstyles, {height: height}]}
//             source={local ? item[imageKey] : {uri: item[imageKey]}}
//           />
//         </TouchableOpacity>
//       );
// }


// export const FlatListImageSlider = ({props}) => {

//     slider = createRef();

//     const defaultProps = {
//         data: [],
//         imageKey: 'image',
//         local: false,
//         width: Math.round(Dimensions.get('window').width),
//         height: 230,
//         separatorWidth: 0,
//         loop: true,
//         indicator: true,
//         indicatorStyle: {},
//         indicatorContainerStyle: {},
//         indicatorActiveColor: '#3498db',
//         indicatorInActiveColor: '#bdc3c7',
//         indicatorActiveWidth: 6,
//         animation: true,
//         autoscroll: true,
//         timer: 3000,
//         onPress: {},
//         contentContainerStyle: {},
//         component: <ChildItem/>,
//     };


//     onViewableItemsChanged = ({viewableItems, changed}) => {
//         if(viewableItems.length > 0){
//             let currentIndex = viewableItems[0].index;
//             if(
//                 currentIndex % props.data.length === props.data.length -1 &&
//                 props.loop)
//                 {
//                     //Change this to useState
//                     this.setState({
//                         index: currentIndex,
//                         data: [...this.state.data, ...this.props.data],
//                     });
//                 } else {
//                     //Change this to useState
//                     this.setState({index: currentIndex});
//                 }

//                 if (props.currentIndexCallback) {
//                     props.currentIndexCallback(currentIndex);
//                 }
//         }
//     };

//     viewabilityConfig = {
//         viewAreaCoveragePercentThreshold: 50,
//     };

//     componentDidMount = () => {
//         if (props.autoscroll) {
//           startAutoPlay();
//         }
//       }

//     componentWillUnmount = () => {
//         if(props.autoscroll){
//             stopAutoPlay();
//         }
//     };

//     startAutoPlay = () => {
//         props.sliderTimer = setInterval(
//             changeSliderListIndex,
//             props.timer,
//         );
//     };

//     stopAutoPlay = () => {
//         if(props.sliderTimer){
//             clearInterval(props.sliderTimer);
//             props.sliderTimer = null;
//         }
//     };

//     changeSliderListIndex = () => {
//         if(props.animation){
//             LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);
//         }
//         //Change this to useState
//         this.setState({index: this.state.index+1});
//         this.slider.current.scrollToIndex({
//             index: this.state.index,
//             animated: true,
//         })
//     }


//     const itemWidth = props.width;
//     const separatorWidth = props.width;
//     totalItemWidth = itemWidth + separatorWidth;

//     return (
//         <View>
//             <FlatList
//                 ref={props.slider}
//                 horizontal
//                 pagingEnabled={true}
//                 snapToAlignment={totalItemWidth}
//                 bouncesZoom={false}
//                 contentContainerStyle={props.contentContainerStyle}
//                 data={props.data}
//                 showsHorizontalScrollIndicator={false}
//                 renderItem={({item, index}) => {
//                     React.cloneElement(props.compnent, {
//                         style:{width: props.width},
//                         item: item, 
//                         imageKey: props.imageKey,
//                         onPress: props.onPress,
//                         index: props.index % props.data.length,
//                         active: index === props.length,
//                         local: props.local,
//                         height: props.height, 
//                     })
//                 }}
//                 ItemSeparatorComponent={() => (
//                     <View style={{width: this.props.separatorWidth}} />
//                 )}
//                 keyExtractor={(item, index) => item.toString() + index}
//                 viewabilityConfig={props.viewabilityConfig}
//                 onViewableItemsChanged={props.onViewableItemsChanged}
//                 getItemLayout={(data, index) => ({
//                     length: totalItemWidth,
//                     offset: totalItemWidth * index,
//                     index,
//                 })}
//                 windowSize={1}
//                 initialNumToRender={1}
//                 maxToRenderPerBatch={1}
//                 removeClippedSubviews={true}
//                 snapToInterval={totalItemWidth}

//                 decelerationRate = "fast"

//                 bounces={false}

//             />
//             {props.indicator && (
//                 <Indicator  
//                     itemCount = {props.data.length}
//                     currentIndex={props.index % props.data.length}
//                     indicatorStyle={props.indicatorStyle}
//                     indicatorContainerStyle={[
//                         styles.indicatorContainerStyle,
//                         props.indicatorContainerStyle,
//                     ]}
//                     indicatorActiveColor={props.indicatorActiveColor}
//                     indicatorInActiveColor={props.indicatorInActiveColor}
//                     indicatorActiveWidth={props.indicatorActiveWidth}
//                     style={{...styles.indicator, ...props.indicatorStyle}}
//                 />
//             )}
//         </View>
//       )

// }



// const ChildItemstyles = StyleSheet.create({
//     container: {},
//     image: {
//       height: 230,
//       resizeMode: 'stretch',
//     },
//   });