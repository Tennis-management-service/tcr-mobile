import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';

import { ClubAssigned } from '../components/clubAssigned';
import { ClubNotAssigned } from '../components/clubNotAssigned';

{/**\
FUNCTIONS WE NEED
  * Function to render if coach has assigned club,
  * Function to render club


*/}

const SetState = (id) => {
  const [club, setclub] = useState('');

  useEffect(() => {
    setclub(id);
  }, []);
};


export const ClubScreen = ({navigation}) => {

  const props  = false;
  
  
  // useEffect(() => {
  //   setclub(true);
  // },[club]);


  if(props){
    return <ClubAssigned props={props} nav={navigation}/>
  } else {
    return <ClubNotAssigned props={props} nav={navigation}/>
  }
 

  // return(
  //   <View>
  //     <Text>Hellow</Text>
  //   </View>
  // )

};
