import React from 'react';
import { StyleSheet, View, Text, FlatList, VirtualizedList, TouchableOpacity, Dimensions } from 'react-native';
import { Agenda, AgendaEntry} from 'react-native-calendars';
import {format, formatISO9075} from 'date-fns';
import { CalendarRenderItemCard } from './calendarRenderItemCard';




const formatt = (date) => format(date, 'yyyy-MM-dd');


// This function gets the date from an array of JSON objects and 
// puts the dates in markedDates={} to be marked.
const getMarkedDates = (appointments) => {

    const markedDates = {};

    
    appointments.forEach((appointment) => {
        const date = new Date(appointment.dateStart);
        // console.log('Date:  ', date);
        const formattedDate = formatt(date);
        // console.log('Formatted Date  ', formattedDate);
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
        const date = new Date(item.dateStart);
        const formatedDate = formatt(date);
        const title = item.name;
        const id = item.id;
        if(itemsOutput[formatedDate]){
            itemsOutput[formatedDate].push({title, id});
        }
        else {
            itemsOutput[formatedDate] = [];
            itemsOutput[formatedDate].push({title, id});
        }
        
        
        
    });

    return itemsOutput;
}

// This function searches appointments by id to find start and end 
// date of the appointment.
// It returns the start and end date to the renderItems function
const getStartEndTime = (id, appointments) => {
    let start;
    let end;
    appointments.forEach((item) => {
        console.log('Item -------> ', item);
        
        const item_id = JSON.stringify(item.id);
        const id_ = JSON.stringify(id);
        
        console.log('Item id', item_id)
        if(item_id == id_){
            start = item.dateStart;
            end = item.dateEnd;

            
        }

    })
    const formatTime = (time) => {return formatISO9075(new Date(time), {representation: 'time'})};
    start = formatTime(start);
    end = formatTime(end);
    return {start, end};
}



export const CalendarComponent = () => {
   
  const APPOINTMENTS = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        dateStart: '2022-07-13T04:30:00.000Z',
        dateEnd: '2022-07-13T05:00:00.000Z',
        name: "It's a past thing!",
    },
    {   id: 'bd7assea-c1b1-46c2-aed5-3ad53abb28ba',
        dateStart: '2022-07-15T14:00:00.000Z',
        dateEnd: '2022-07-15T15:00:00.000Z',
        name: "It's a today thing!",
    },
    {
        id: 'bd7acbea-css1-46c2-aed5-3ad53abb28ba',
        dateStart: '2022-07-15T04:00:00.000Z',
        dateEnd: '2022-07-15T05:00:00.000Z',
        name: "It's a future thing!",
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53ddb28ba',
        dateStart: '2022-07-19T04:00:00.000Z',
        dateEnd: '2022-07-19T05:00:00.000Z',
        name: 'Brandon'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abbssba',
        dateStart: '2022-07-10T04:00:00.000Z',
        dateEnd: '2022-07-10T05:00:00.000Z',
        name: 'Spyridon3'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3dd53abb28ba',
        dateStart: '2022-07-10T04:00:00.000Z',
        dateEnd: '2022-07-10T05:00:00.000Z',
        name: 'Spyridon1'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad522bb28ba',
        dateStart: '2022-07-20T04:00:00.000Z',
        dateEnd: '2022-07-10T05:00:00.000Z',
        name: 'Spyridon2'
    },
    {
        id: 'bd7acbea-c111-46c2-aed5-3ad53abb28ba',
        dateStart: '2022-07-07T04:00:00.000Z',
        dateEnd: '2022-07-08T05:00:00.000Z',
        name: 'Theo'
    },
  ];
  console.log('RESULTS  ',getStartEndTime('bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',APPOINTMENTS ));
  console.log('Marked:  ', getMarkedDates(APPOINTMENTS));
  console.log('Items:  ', getItems(APPOINTMENTS));
  // console.log('RenderItems:  ', renderItems(APPOINTMENTS));

  const markedDates = getMarkedDates(APPOINTMENTS);
  

  return (
    <View style={styles.container}>
      <Agenda
        items={getItems(APPOINTMENTS)}
        loadItemsForMonth={(month) => {console.log(`trigger items loading for ${month}`)}}
        minDate={'2022-01-15'}
        maxDate={'2023-01-15'}
        pastScrollRange={12}
        futureScrollRange={12}

        markedDates={markedDates}
        renderItem={(item, firstItemInDay) => {
            console.log('Item:   :  :  :   ', item);
            const result = getStartEndTime(item.id,APPOINTMENTS )
            return <CalendarRenderItemCard startTime={result.start} endTime={result.end} title={item.title}/>
            
        }}
   
        renderEmptyData={() => {
            return (
                <View style={{margin: 10, backgroundColor: 'grey'}}>
                    <Text style={{}}>Empty Day</Text>
                </View>
            )
            }
        }
        rowHasChanged={(r1, r2) => {
            return r1.text !== r2.text;
          }}

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
    height: 10,
    width: 20,
    backgroundColor: 'grey'
  },
  flatlist:{
    backgroundColor: 'grey',
    margin: 10,
    height: 200,
    width: 140
  }
});