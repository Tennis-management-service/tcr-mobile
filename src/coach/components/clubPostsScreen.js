import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, Button, Modal} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


const LikePost = ({likeCount}) => {
    const [LikeCount, setLikeCount] = useState(likeCount);
    return(
        
            <Button 
                title='Like' 
                onPress={() => {
                    setLikeCount(LikeCount+1);
                }}
                style={styles.likeButton} />
       
    )
}




const PopUpComments = ({comments, visibility}) => {
    const [isVisible, setVisible] = useState(visibility);
    return(
        <View>
            <Button title={'Comment'} onPress={() =>  setVisible(true)} />

            <Modal transparent animationType='fade' visible={isVisible}>
                <View style={styles.modalBackground}>
                    
                    <View style={styles.modalContentContainer}>
                        <Button title={'OFF'} onPress={() => setVisible(false)} />
                        <FlatList 
                            key={'00'}
                            style={{flex:1, flexWrap: 'wrap'}}
                            data={comments}
                            renderItem={({item, index}) => {
                                return (
                                <View style={styles.commentBox}>
                                    <Text style={{flex: 1, flexWrap: 'wrap', borderWidth: 1}}>{item.comment}</Text>
                                </View>
                                )
                            }}
                            keyExtractor={(index) => index}

                            />
                        <Text>Hello World</Text>
                        <Text>Hello World</Text>
                        <Text>Hello World</Text>
                        <Text>Hello World</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export const ClubPostsScreen = ({props}) => {
    const screenWidth = props.screenWidth;
    let data = props.data;
    console.log('Data in clubPostScreen: ', data[0].desc);

    const [visible, setVisible] = useState(false);

    let cards = [];
    for(let i=0; i<data.length; i++){
        
        cards.push(
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    {data[i].profileImage ? <Image style={styles.profileImage} key={i+3} source={{uri: data[i].profileImage}}/>: null }
                    {data[i].name ? <Text style={styles.nameText} key={i+2}>{data[i].name}</Text> : null}
                </View>
                {data[i].desc ? <Text style={styles.descText}  key={i+1}>{data[i].desc}</Text>: null}
                {data[i].image ? <Image key={i+3} style={[styles.image, {width:screenWidth}]} source={{uri: data[i].image}}/> : null}
                <View style={styles.buttonBottomBar}>
                    {data[i].likes ? <LikePost likeCount={data[i].likes} /> : null}
                    {data[i].comment ? <PopUpComments comments={data[i].comments} visibility={visible} /> : null}
                </View>
                
                
            </View>
        )
    }
  return (

    <View key={0} style={[styles.container, {width: screenWidth}]}>
        {cards}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    fill: {flex: 1/6},
    card:{
        flex:1,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#dff5f4',

        //Border
        borderWidth: 1,

    },
    cardHeader: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    profileImage: {
        height: 70,
        width: 70,
        

        //Position
        
    },
    nameText:{
        fontWeight: 'bold',
        fontSize: 15,
        
        margin: 15,
    },
    descText:{
        fontSize: 15,
        marginTop: 5,
        marginBottom: 5,
    }, 
    image:{
        marginTop: 5,
        height: 300,
        resizeMode: 'stretch'
    }, 
    likeButton:{
        height: 20,
        
    },
    commentButton:{

    },
    buttonBottomBar:{
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    modalBackground:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)' ,

    }, 
    modalContentContainer:{
        height: "90%",
        width: "90%",
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    commentBox: {
        flex: 1,
        flexWrap: 'wrap',
        backgroundColor: 'yellow',
        marginTop: 8,
        padding: 5, 
        borderWidth: 0.5,
        borderRadius: 7,
    }
})

