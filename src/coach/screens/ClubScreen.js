import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native'


{/**\
FUNCTIONS WE NEED
  * Function to render if coach has assigned club,
  * Function to render club


*/}

const ClubAssigned = () => {
  return (
    <View>
      <Text>Club</Text>
    </View>
  )
}
const ClubNotAssigned = () => {
  return (
    <View>
      <Text>Club</Text>
    </View>
  )
}

export const ClubScreen = ({props}) => {
  const [club, setClub] = useState(true);
  setClub(true);

  switch(club){
    case true:
       <ClubAssigned />
    break;
    case false:
       <ClubNotAssigned />
    break;
    default:
      return null;
  }
}
