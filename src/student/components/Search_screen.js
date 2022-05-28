import * as React from 'react';
import { Text, View , TextInput, StyleSheet, Button} from 'react-native';


const Search_screen = ({ navigation }) => {

    // write functionality for search.
    // that screen will lead to another screen showing the results of the search. 

    return (
        <View>
            <TextInput 
            style={styles.input}
            placeholder={'Search coach by location, name or ability'}
            />
            <Button 
                title="Search"
                onPress={navigation.navigate('Search_result')}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});


export default Search_screen;