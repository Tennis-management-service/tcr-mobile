import React, {useEffect, useState } from 'react';
import { CoachProfileCard } from '../components/CoachProfileCard';
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';



export const RenderCards = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [isStarted, setStarted] = useState(true);
    const [data, setData] = useState([]);
    const [err, SetErr] = useState([]);

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
        // .then((response) => {
        //     console.log('Response:  ', response.data);
        //     setData(response.data);
        // })
        // .then(() => {
        //     console.log("Data:   ", JSON.stringify(data[0]));
            
        // })
        // .catch((error)=> {
        //     console.error(error);
        // })
        
        
    }


    useEffect(() => {
      
        
        axiosFetch();
        

        console.log('Data: ', data);
     
    },[]);



    return(
      <View style={styles.container}>

        <FlatList
            style={{height: '100%', paddingBottom: 50}}
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              const name = item.name;
              const email = item.email;
              
              return(
                <TouchableOpacity
                onPress={ () => navigation.navigate('Profile', {
                  name:name,
                  email:email
                  })}>
                
           
                <CoachProfileCard 
                  author={item.name}
                  date={item.email}
                  title={item.address.city}
                  />
                  </TouchableOpacity>
                
 
                  )
                }}
        
                keyExtractor={(item) => item.email}  
                />  
  
        
        
      </View>
        
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
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
      name: {
        fontFamily: 'Verdana',
        fontSize: 18
      },
      email: {
        color: 'red'
      }
})