import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Dimensions, Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import {format, subWeeks, addWeeks} from 'date-fns';

// LocaleConfig.locales['fr'] = {
//     monthNames: [
//         'January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September',
//         'October',
//         'November',
//         'December'
//     ],
//     monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
//     dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//     dayNamesShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     today: 'Monday'
// };

// LocaleConfig.defaultLocale = 'fr';


const formatt = (date = new Date()) => {

    format(date, 'yyyy-mm-dd');

}


const getMarkedDates = (baseDate, appointments = []) => {
    const markedDates = {

    }

    markedDates[format(baseDate)] = { selected: true};

    return markedDates;
}


export const CalendarComponent = () => {
    const baseDate = new Date("2022-07-16");



    const APPOINTMENTS = [
        {
            date: '2022-08-10T05:00:00:00.000Z',
            title: 'Visa'
        },
        {
            date: '2022-08-15T05:00:00.000Z',
            title: 'Passport'
        },
        {
            date: '2022-09-10T05:00:00.000Z',
            title: 'I-20'
        }
    ];
   
 

    
    // LocaleConfig.locales['']
    return (
    
        <View style={styles.container}>
            <Calendar
                
                initialDate={formatt(baseDate)}
                minDate={subWeeks(baseDate, 2)}
                // // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={addWeeks(baseDate, 2)}
                // // Handler which gets executed on day press. Default = undefined
                onDayPress={day => {
                    console.log('selected day', day);
                }}
                // // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={day => {
                    console.log('selected day', day);
                }}
                // // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                // monthFormat={'yyyy MM'}
                // // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={month => {
                    console.log('month changed', month);
                }}
                // // Hide month navigation arrows. Default = false
                // hideArrows={true}
                enableSwipeMonths={true}
                // // Replace default arrows with custom ones (direction can be 'left' or 'right')
                // renderArrow={direction => <Arrow />}
                // // Do not show days of other months in month page. Default = false
                // hideExtraDays={true}
                // // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                // // day from another month that is visible in calendar page. Default = false
                // disableMonthChange={false}
                // // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                // firstDay={1}
                // // Hide day names. Default = false
                // hideDayNames={false}
                // // Show week numbers to the left. Default = false
                // showWeekNumbers={true}
                // // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                // onPressArrowLeft={subtractMonth => subtractMonth()}
                // // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                // onPressArrowRight={addMonth => addMonth()}
                // // Disable left arrow. Default = false
                // disableArrowLeft={false}
                // // Disable right arrow. Default = false
                // disableArrowRight={false}
                // // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                // disableAllTouchEventsForDisabledDays={true}
                // // Replace default month and year title with custom one. the function receive a date as parameter
                // renderHeader={date => {
                //     /*Return JSX*/
                // }}
                // // Enable the option to swipe between months. Default = false
                // enableSwipeMonths={true}

                // markedDates={{
                //     '2022-06-16':{selected:true, selectedColor: 'blue'}
                // }}

                theme={{
                    
                    selectedDayBackgroundColor: '#fce172'
            
                }}
            />
            
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:{
            paddingTop: 50,
            
        }
    });