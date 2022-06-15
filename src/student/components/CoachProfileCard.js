import React from "react";
import { StyleSheet, Image, View, TextInput, Button} from 'react-native';
import { Block, Text } from 'galio-framework';

export const CoachProfileCard = (props) => {


    return(
        
        <View> 
        <Block style={[styles.card]}>
            <Block row space='between'>
                <Block row>
                    {/* <Image style={styles.avatar} source={{uri:props.avatar}} /> */}
                    <Block style={{ paddingLeft: 8 }}>
                        <Text size={14}>{props.author}</Text>
                        <Text size={14}>{props.date}</Text>
                    </Block>
                </Block>
            </Block>
            <Block style={{ paddingTop: 8 }}>
                <Text size={16}>{props.title}</Text>
                <Text size={16}>{props.summary}</Text>
            </Block>
        </Block><Text style={[styles.texts]}>This is SearchScreenRender</Text>
        </View> 
        
    )
}

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
    },
    avatar:{
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        
    }
})