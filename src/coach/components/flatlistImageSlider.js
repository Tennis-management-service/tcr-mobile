import React from 'react'
import { View, Text, StyleSheet, LayoutAnimation } from 'react-native';

export const FlatListImageSlider = ({props}) => {
  return (
    <View>
        <Text>Slider</Text>
        <Text>Tab Bar</Text>
    </View>
  )
}


onViewableItemsChanged = ({viewableItems, changed}) => {
    if(viewableItems.length > 0){
        let currentIndex = viewableItems[0].index;
        if(
            currentIndex % props.data.length === props.data.length -1 &&
            props.loop)
            {
                //Change this to useState
                this.setState({
                    index: currentIndex,
                    data: [...this.state.data, ...this.props.data],
                });
            } else {
                //Change this to useState
                this.setState({index: currentIndex});
            }

            if (props.currentIndexCallback) {
                props.currentIndexCallback(currentIndex);
            }
    }
};

viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
};

componentWillUnmount = () => {
    if(props.autoscroll){
        this.stopAutoPlay();
    }
};

startAutoPlay = () => {
    this.sliderTimer = setInterval(
        this.changeSliderListIndex,
        this.props.timer,
    );
};

stopAutoPlay = () => {
    if(this.sliderTimer){
        clearInterval(this.sliderTimer);
        this.sliderTimer = null;
    }
};

changeSliderListIndex = () => {
    if(props.animation){
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);
    }
    //Change this to useState
    this.setState({index: this.state.index+1});
    this.slider.current.scrollToIndex({
        index: this.state.index,
        animated: true,
    })
}