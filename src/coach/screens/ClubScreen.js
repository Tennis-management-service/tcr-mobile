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


export const ClubScreen = ({}) => {

  const props  = true;
  
  
  // useEffect(() => {
  //   setclub(true);
  // },[club]);


  if(props){
    return <ClubAssigned />
  } else {
    return <ClubNotAssigned />
  }
 

  // return(
  //   <View>
  //     <Text>Hellow</Text>
  //   </View>
  // )

};
