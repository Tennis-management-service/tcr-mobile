import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Agenda, AgendaEntry} from 'react-native-calendars';
import {format } from 'date-fns';



const formatt = (date) => format(date, 'yyyy-MM-dd');


// This function gets the date from an array of JSON objects and 
// puts the dates in markedDates={} to be marked.
const getMarkedDates = (appointments) => {

    const markedDates = {};

    
    appointments.forEach((appointment) => {
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

// This function gets the title from an array of JSON objects and 
// puts the title into items so they can be listed when date is clicked.
const getItems = (items) => {

    const itemsOutput = {};

    items.forEach((item) => {
        const date = new Date(item.date);
        const formatedDate = formatt(date);
        const title = item.name;
        if(itemsOutput[formatedDate]){
            itemsOutput[formatedDate].push({title});
        }
        else {
            itemsOutput[formatedDate] = [];
            itemsOutput[formatedDate].push({title});
        }
        
        
        
    });

    return itemsOutput;
}



export const CalendarComponent = () => {
   
  const APPOINTMENTS = [
    {
        date: '2022-07-13T05:00:00.000Z',
        name: "It's a past thing!",
        duration: '2'
    },
    {
        date: '2022-07-15T05:00:00.000Z',
        name: "It's a today thing!",
    },
    {
        date: '2022-07-15T05:00:00.000Z',
        name: "It's a future thing!",
    },
    {
        date: '2022-07-19T05:00:00.000Z'
    },
    {
        date: '2022-07-10T05:00:00.000Z'
    }
  ];

  console.log(getMarkedDates(APPOINTMENTS));

  const markedDates = getMarkedDates(APPOINTMENTS);
  return (
    <View style={styles.container}>
      <Agenda
        
        items={getItems(APPOINTMENTS)}
        loadItemsForMonth={(month) => {console.log('trigger items loading')}}
        minDate={'2022-01-15'}
        maxDate={'2023-01-15'}
        pastScrollRange={12}
        futureScrollRange={12}

        markedDates={markedDates}
        renderDay={(day, item) => {return (<View><Text>Hello world</Text></View>);}}
        renderItem={(item, firstItemInDay) => {return (<View />);}}

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
  renderBox: {
    
  }
});