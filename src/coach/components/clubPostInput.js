import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'





export const ClubPostInput = ({props}) => {
    const [text, setText] = useState('');
    const [height1, setHeight] = useState();

    //Gets bigger value of height and returns it. 
    const bestHeight = Math.max(120, height1);

  return (
    <View style={[styles.container,{width: props.screenWidth, height: 150}]}>
        <TextInput
            style={[styles.input, {height: 100}]}
            value={text}
            multiline={true}
            onChangeText={(text) => setText(text)}
            onContentSizeChange={(event) => {
                const height = event.nativeEvent.contentSize.height;
                console.log(height);
                setHeight(height);
            }}
            placeholder={'Announcement'}
        />
        <Button 
            style={styles.button}
            title='Post'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        backgroundColor: '#dff5f4',

    }, 
    input: {
        fontSize: 18,
    },
    button:{
        height: 40,

    },
})
