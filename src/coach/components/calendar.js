import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Agenda} from 'react-native-calendars';
import {format } from 'date-fns';



const formatt = (date) => format(date, 'yyyy-MM-dd');

const getMarkedDates = (appointmentss) => {

    const markedDates = {};

    
    appointmentss.forEach((appointment) => {
        const date = new Date(appointment.date);
        console.log('Date:  ', date);
        const formattedDate = formatt(date);
        console.log('Formatted Date  ', formattedDate);
        markedDates[formattedDate] = {
            ...markedDates[formattedDate],
            marked: true,
        };
    });

    return markedDates;
}



export const CalendarComponent = () => {
   
  const APPOINTMENTS = [
    {
      date: '2022-07-13T05:00:00.000Z',
      title: "It's a past thing!",
    },
    {
      date: '2022-07-15T05:00:00.000Z',
      title: "It's a today thing!",
    },
    {
      date: '2022-07-18T05:00:00.000Z',
      title: "It's a future thing!",
    },
    {
        date: '2022-07-19T05:00:00.000Z'
    }
  ];

  console.log(getMarkedDates(APPOINTMENTS));

  const markedDates = getMarkedDates(APPOINTMENTS);
  return (
    <View style={styles.container}>
      <Agenda
        
        items={{
            '2022-07-13': [{name: 'item1'}, {name: 'Item1.1'}],
            '2022-07-13': [{name: 'item1'}, {name: 'Item1.1'}],
            '2022-07-18': [{name: 'item2', height: 80}],
            '2022-07-19': [{name: 'item4'}]
        }}
        loadItemsForMonth={(month) => {console.log('trigger items loading')}}
        minDate={'2022-01-15'}
        maxDate={'2023-01-15'}
        pastScrollRange={12}
        futureScrollRange={12}

        markedDates={markedDates}
      
        theme={{
            
        }}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 600,
    backgroundColor: '#e0c00b',
    justifyContent: 'center',
  },
});