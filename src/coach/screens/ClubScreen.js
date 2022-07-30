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


export const ClubScreen = ({props}) => {


  SetState(props.id);
  
  // useEffect(() => {
  //   setclub(true);
  // },[club]);


  switch(club){
    case true:
       return <ClubAssigned />
    break;
    case false:
       return <ClubNotAssigned />
    break;
    default:
      return null;
  }

  // return(
  //   <View>
  //     <Text>Hellow</Text>
  //   </View>
  // )

};
