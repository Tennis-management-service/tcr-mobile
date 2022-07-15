import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Dimensions, Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';

import CalendarStrip from 'react-native-slideable-calendar-strip';

let { width } = Dimensions.get('window');



export const CalendarSlider = () => {

    const [selectedStartDate, setDate] = React.useState();
    const [ondateChange, setDateChange] = React.useState();

    events: 
    {

    }
    
    LocaleConfig.locales['']
return (
    <View style={styles.container}>
        <CalendarStrip isEnglish showWeekNumber showEnglishLunar
        selectedDate={this.state.selectedDate} onPressDate={(date) => { this.setState({ selectedDate: date });
        }}
        onPressGoToday={(today) => { this.setState({ selectedDate: today });
        }}
        onSwipeDown={() => { alert('onSwipeDown');
        }}
        markedDate={['2020-03-04', '2020-03-15', '2020-03-04', '2020-03-01']}
        weekStartsOn={1}
        />
        <View>
        </View>
    </View>
);
}

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: '#b3fff3',
            marginTop: 100,
        }
    });