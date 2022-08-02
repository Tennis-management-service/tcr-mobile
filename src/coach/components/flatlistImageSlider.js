import React from 'react'
import { View, Text, StyleSheet, LayoutAnimation, FlatList } from 'react-native';

export const FlatListImageSlider = ({props}) => {

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
        props.sliderTimer = setInterval(
            this.changeSliderListIndex,
            this.props.timer,
        );
    };

    stopAutoPlay = () => {
        if(props.sliderTimer){
            clearInterval(props.sliderTimer);
            props.sliderTimer = null;
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


    const itemWidth = props.width;
    const separatorWidth = props.width;
    totalItemWidth = itemWidth + separatorWidth;

    return (
        <View>
            <FlatList

                getItemLayout={(data, index) => ({
                    length: totalItemWidth,
                    offset: totalItemWidth * index,
                    index,
                })}

                snapToInterval={totalItemWidth}

                decelerationRate = "fast"

                bounces={false}

            />
        </View>
      )

}