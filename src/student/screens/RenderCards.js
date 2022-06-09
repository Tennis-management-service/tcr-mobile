import React, {useEffect, useState} from 'react';
import { CoachProfileCard } from '../components/CoachProfileCard';
import { StyleSheet, View, TextInput, Button} from 'react-native';


export const SearchScreenRenderCards = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [name, setName] = useState();
    const [age, setAge ] = useState();
    const [data, setData] = useState([]);

    async function fetchData () {
        await fetch('https://jsonplaceholder.typicode.com/users',
            {
                method: 'GET',
                dataType: 'json',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(response => {
                console.log('Response -----: ', response)
                return response;
            })
        
            .catch((error) => console.error(error))
            .finally(() => setLoading(false), 2000);
    }

    // Component to loop through data and display multiple cards
    const cardsLoop = () => {


        return (
            <View>
                
            </View>
        )
    }
    


    useEffect(() => {
        console.log('mounted..');
        setInterval(()=> {
            setData(fetchData());
        }, 1000);

        return console.log('unmounting...');
    }, []);



    

    return(
        <View style={[styles.container]}>
            <CoachProfileCard
                
                author={name}
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