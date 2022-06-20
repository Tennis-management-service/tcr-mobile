import React, {useEffect, useState } from 'react';
import { CoachProfileCard } from '../components/CoachProfileCard';
import { StyleSheet, View, Text, FlatList, List, TextInput, Button} from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';



export const SearchScreenRenderCards = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [isStarted, setStarted] = useState(true);
    const [data, setData] = useState([]);
    const [err, SetErr] = useState([]);

    const dummyDataUsers = 'https://jsonplaceholder.typicode.com/users';
    
    const axiosFetch =  async (options) => {
       

        await axios({
            method: 'GET',
            url: dummyDataUsers,

        })
        .then((response) => {
            console.log(response.data);
            return setData(response.data);
        })
        .then(() => {
            console.log("Data:   ", JSON.stringify(data[0]));
            
        })
        .catch((error)=> {
            console.error(error);
        })
        
        
    }


    useEffect(() => {
    
        axiosFetch();
        
     
    },[]);

    
    const listedItems = [
        {name:"hana", email:"sdsd@sdds"},
        {name:"jogn", email:"sdsdd@sdds"}
    ]
    // const listItems = userData.map(item=>{
    //     <Text key={item.name}>Hello {item.name}</Text>
    // })

    return(
      <View style={styles.container}>

        <FlatList
            style={{height: '100%', paddingBottom: 50}}
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return(
            <View style={styles.flatview}>
                <Text style={styles.h2text}>Hello World</Text>
                <Text style={styles.name}>Hello {item.name}</Text>
                <Text style={styles.email}>Hello {item.email}</Text>
            </View>
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