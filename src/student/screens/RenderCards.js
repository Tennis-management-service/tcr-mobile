import React, {useEffect, useState} from 'react';
import { CoachProfileCard } from '../components/CoachProfileCard';
import { StyleSheet, View, TextInput, Button} from 'react-native';


export const SearchScreenRenderCards = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [isStarted, setStarted] = useState(true);
    const [name, setName] = useState();
    const [age, setAge ] = useState();
    const [data, setData] = useState([]);
    const [err, SetErr] = useState([]);

    
    


    useEffect(() => {
        const fetchData = () =>{
            fetch('https://jsonplaceholder.typicode.com/users',
                {
                    method: 'GET',
                    dataType: 'json',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => {
                    if(res.status >=400){
                        throw new Error("Server responds with error");
                    }
                    return res.json()
                })
                .then(response => {
                    console.log('Response -----: ', response)
                    setData(response);
                    
                },
                err => {
                    SetErr(err);
                })
            
                .catch((error) => console.error(error))
                .finally(() => setLoading(false), 2000);
        };

        fetchData();
    
        
    }, []);



    

    return(
        <View style={[styles.container]}>
            <CoachProfileCard
                
                author={data[0].name}
                date='sdsd'
                title='Coach'
                summary='sldjfalsjasldjfaksdfh8wefhsdjkvnk'
            />     
                 
        </View>
    )
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F8EDEB',
        paddingHorizontal: 20,
        paddingVertical: 64
    },
    card: {
        backgroundColor: '#fff',
        padding: 8,
        width: '80%',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 4,
        elevation: 7
    },
    texts:{
        color:'#707070',
        fontSize: 18
    },
    cardImageRadius:{
        borderRadius: 55/2
    }
})