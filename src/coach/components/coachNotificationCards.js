import React from 'react'
import { View, Text } from 'react-native'

export const CoachNotificationCards = () => {
  return (
    <View>
    <ClubPostNotification />
    <StudentConnectRequestNotification />
    <StudentLessonRequestNotification />
    </View>
  )
}


export const ClubPostNotification = () => {
  return (
    <View>
        <Text>ClubPostNotification</Text>
    </View>
  )
}



export const StudentConnectRequestNotification = () => {
  return (
    <View>
        <Text>StudentRequestNotification</Text>
    </View>
  )
}


export const StudentLessonRequestNotification = () => {
    return (
        <View>
            <Text>StudentLessonRequestNotification</Text>
        </View>
    )
}

