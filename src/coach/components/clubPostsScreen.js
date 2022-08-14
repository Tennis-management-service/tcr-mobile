import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, Button, Modal} from 'react-native'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';



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




const PopUpComments = ({comments, visibility, key}) => {
    const [isVisible, setVisible] = useState(visibility);
    const [newComment, setComment] = useState();
    const [inputHeight, setHeight] = useState();
    return(
        <View key={key}>
            <Button title={'Comment'} onPress={() =>  setVisible(true)} />

            <Modal transparent animationType='fade' visible={isVisible}>
                <View style={styles.modalBackground}>
                    
                    <View style={styles.modalContentContainer}>
                        <Button title={'OFF'} onPress={() => setVisible(false)} />
                        <FlatList 
                            style={{flex:1, heigth: "90%", flexWrap: 'wrap', borderWidth: 1}}
                            data={comments}
                            renderItem={({item, index}) => {
                                console.log('COMMENTITEM ', item);
                                return (
                                <View key={item.id} style={styles.commentBox}>
                                    <Text style={{color: 'black'}}>{item.comment}</Text>
                                </View>
                                )
                            }}
                            keyExtractor={(item, index) => item.id}
                        />
                        <View style={{width: "100%", height: 0.5, backgroundColor: 'blue'}}/>
                        <View style={styles.inputButtonView}>
                            <TextInput 
                                style={styles.modalTextInput}
                                placeholder='A penny for your thoughts.'
                                onChangeText={(text) => setComment(text)}
                                multiline={true}
                                numberOfLines={3}
                                // onContentSizeChange={(event) => {
                                //     const height = event.nativeEvent.contentSize.height;
                                  
                                //     setHeight(height);
                                // }}
                                />
                            {/* Add Image of arrow to push post */}
                            <Text>Hello</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export const ClubPostsScreen = ({props}) => {
    const screenWidth = props.screenWidth;
    let data = props.data;

    const [visible, setVisible] = useState(false);

    let cards = [];

    for(let i=0; i<data.length; i++){
        
        cards.push(
            <View key={data[i].id} style={styles.card}>
                <View style={styles.cardHeader}>
                    {data[i].profileImage ? <Image style={styles.profileImage} source={{uri: data[i].profileImage}}/>: null }
                    {data[i].name ? <Text style={styles.nameText} key={i+2}>{data[i].name}</Text> : null}
                </View>
                {data[i].desc ? <Text style={styles.descText}>{data[i].desc}</Text>: null}
                {data[i].image ? <Image style={[styles.image, {width:screenWidth}]} source={{uri: data[i].image}}/> : null}
                <View key={i+3} style={styles.buttonBottomBar}>
                    {data[i].likes ? <LikePost likeCount={data[i].likes} /> : null}
                    {data[i].comment ? <PopUpComments key={data[i].comments.id} comments={data[i].comments} visibility={visible} /> : null}
                </View>
                
                
            </View>
        )
    }
  return (

    <View key={'14'} style={[styles.container, {width: screenWidth}]}>
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
        height: "100%",
        width: "90%",
        backgroundColor: 'white',
        elevation: 7, 
    },
    commentBox: {
        backgroundColor: '#d0e2bc',
        marginTop: 8,
        marginLeft: 5, 
        padding: 5, 
        borderRadius: 7,
    }, 
    modalTextInput: {
        borderWidth: 1,
        margin: 4,
        width: "80%",
        borderRadius: 8, 
    },
    inputButtonView: {
      flexDirection: 'row',
      
      alignItems: 'center',
    },
})

