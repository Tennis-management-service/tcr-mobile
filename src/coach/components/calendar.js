import React from 'react';
import { StyleSheet, View, Text, FlatList, VirtualizedList, TouchableOpacity, Dimensions } from 'react-native';
import { Agenda, AgendaEntry} from 'react-native-calendars';
import {format, formatISO9075} from 'date-fns';
import { render } from 'react-dom';




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

const renderItems = (newItems) => {
    const {width, height} = Dimensions.get('window')
    const formatTime = (time) => {return formatISO9075(new Date(time), {representation: 'time'})};

    const items = [];

    // newItems.map((item) => {
    //     const timeStart = item.dateStart;
    //     const timeEnd = item.dateEnd;
    //     const startTime = formatTime(timeStart);    
    //     const endTime = formatTime(timeEnd);
    //     const name = item.name;
    //     items.push({startTime, endTime, name})
    //     console.log('S ', startTime);
    //     console.log('E ',endTime);

    //     return (
    //         <View style={{height: 40, width: width,  paddingTop: 10, backgroundColor: 'red'}}>
    //             <Text>{item.name}</Text>
    //         </View>
    //     )
        
    // })

    return (
        <View>
        <FlatList   
            style={{width: width, height: 40, margin: 10, backgroundColor: 'blue'}}
            date={newItems}
            renderItem={(item) => {
                const timeStart = item.dateStart;
                console.log('TimeStart --------:  ', timeStart);

                return (
                    
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Hello</Text>
                
                )
            }}
        />
        </View>
    )

    
    
    

}



export const CalendarComponent = () => {
   
  const APPOINTMENTS = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        dateStart: '2022-07-13T04:00:00.000Z',
        dateEnd: '2022-07-13T05:00:00.000Z',
        name: "It's a past thing!",
    },
    {   id: 'bd7assea-c1b1-46c2-aed5-3ad53abb28ba',
        dateStart: '2022-07-15T05:00:00.000Z',
        dateEnd: '2022-07-15T05:00:00.000Z',
        name: "It's a today thing!",
    },
    {
        id: 'bd7acbea-css1-46c2-aed5-3ad53abb28ba',
        dateStart: '2022-07-15T06:00:00.000Z',
        dateEnd: '2022-07-15T05:00:00.000Z',
        name: "It's a future thing!",
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53ddb28ba',
        dateStart: '2022-07-19T07:00:00.000Z',
        dateEnd: '2022-07-19T05:00:00.000Z',
        name: 'Brandon'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abbssba',
        dateStart: '2022-07-10T08:00:00.000Z',
        dateEnd: '2022-07-10T05:00:00.000Z',
        name: 'Spyridon'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3dd53abb28ba',
        dateStart: '2022-07-10T09:00:00.000Z',
        dateEnd: '2022-07-10T05:00:00.000Z',
        name: 'Spyridon'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad522bb28ba',
        dateStart: '2022-07-20T08:00:00.000Z',
        dateEnd: '2022-07-10T05:00:00.000Z',
        name: 'Spyridon'
    },
    {
        id: 'bd7acbea-c111-46c2-aed5-3ad53abb28ba',
        dateStart: '2022-07-07T09:00:00.000Z',
        dateEnd: '2022-07-08T05:00:00.000Z',
        name: 'Theo'
    },
  ];

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
        // renderDay={(day, item) => {
        //     return (
        //     <View><Text>Day</Text></View>
        //     )
        // }}
        // renderItem={() => {
        //     return(
        //         <View>
        //             <FlatList
        //                 style={{height: '100%', paddingTop: 20}}
        //                 data={APPOINTMENTS}
        //                 renderItem={(item) => {
        //                     const timeStart = formatISO9075(item.dateStart);
        //                     console.log(' Time Start: ', timeStart);
        //                     const timeEnd = formatISO9075(item.dateEnd);

        //                     return (
        //                         <View style={{height: 40, width: width,  paddingTop: 10, backgroundColor: 'red'}}>
        //                             <Text>Hello This is FlatList</Text>
        //                         </View>
        //                     )
        //                 }}
                        
        //             />
        //         </View>
        //     )
        // }}

        // renderItem={renderItems(APPOINTMENTS)}

        renderItem={(APPOINTMENTS) => {
            const {width, height} = Dimensions.get('window')
            return (
                <View style={{marginBottom: 10}}>
                <FlatList
                    style={{ width: 200, margin: 5,  backgroundColor: 'red', border: 1, borderRadius: 6}}
                    data={APPOINTMENTS}
                    renderItem={(item) => {
                        
                        console.log('Item field', item.name);
                        return (
                            <View style={{ padding: 12, backgroundColor: 'yellow'}}>
                                <Text style={{height: 20, margin: 2, width: 90, backgroundColor: 'blue'}}>Time / duration</Text>
                                <Text style={{height: 20, margin: 2, width: width, backgroundColor: 'orange'}}>Name</Text>
                            </View> 
                        )
                        
                    }}
                    keyExtractor={item => item.id}
                    
                    />
                    {/* <VirtualizedList
                        style={{ width: 200, margin: 5,  backgroundColor: 'red', border: 1, borderRadius: 6}}
                        data={APPOINTMENTS}
                        initialNumToRender={4}
                        renderItem={({ item }) => {<Text>Hello World</Text>}}
                        keyExtractor={item => item.id}
                        getItemCount={5}

                    
                        
                       
                    /> */}
                </View>
                   
            )
            
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
  }
});