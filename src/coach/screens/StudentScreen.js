import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import axios from 'axios';

//Screens
import { StudentProfileScreen } from './StudentProfileScreen';
import { StudentCard } from '../components/studentCard';



export const StudentScreen = ({navigation}) => {

const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);

const dummyDataUsers = 'https://jsonplaceholder.typicode.com/users';

const axiosFetch =  async (options) => {
    setLoading(true);
  
    try{
    const {data: response } = await axios({
        method: 'GET',
        url: dummyDataUsers,

    })
    console.log('Response: ', response);
    setData(response);
  } catch (error) {
    console.error(error.message);
  }
  setLoading(false);
    
}

useEffect(()=> {
  axiosFetch();

  console.log('Data ', data);
}, []);




  return (
    <View style={styles.container}>
        <FlatList
          style={{height:'100%'}}
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            const name = item.name;
            
            return(
                  <StudentCard name={name} imageUrl={'https://reactnative.dev/img/tiny_logo.png'} navigation={navigation} />
                  )
          }}
          keyExtractor={(item) => item.email}
          />
    </View>
  
    
    
  )

}




const styles = StyleSheet.create({
  container: {
      flex: 1,
      margin: 2,
      backgroundColor: '#F5FCFF',
    },
    h2text: {
      marginTop: 10,
      fontFamily: 'Helvetica',
      fontSize: 36,
      fontWeight: 'bold',
    },
    flatview: {
      justifyContent: 'center',
      paddingTop: 30,
      borderRadius: 2,
    },
   
})
