import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.emailInput} placeholder='email' />
      <TextInput style={styles.passwordInput} placeholder='password' />

      <View style={styles.userTypeView}>
        <TouchableOpacity style={styles.studentButton}><Text>Student</Text></TouchableOpacity>
        <TouchableOpacity style={styles.coachButton}><Text>Coach</Text></TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.signUpButton}
        onPress={() => {
          navigation.navigate('AddInformation')
        }}><Text>Sign Up</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity 
          style={styles.gmailButton}
          onPress={
            () => {}
          }><Text>G</Text></TouchableOpacity>
      </View>

      <View style={styles.signInView}>
        <Text>Already a user ?</Text>
        <TouchableOpacity 
          style={styles.signInButton}
          onPress={
            () => {
              navigation.navigate('SignIn')
            }
          }><Text style={styles.signInButtonText}>Sign In</Text></TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
  },
  emailInput: {
    borderWidth: 1, 
    width: "70%",
    marginTop: "40%", 
  }, 
  passwordInput: {
    borderWidth: 1, 
    width: "70%", 
    marginTop: "2%",
  }, 
  userTypeView: {
    flexDirection: 'row',
    marginTop: "8%",
  },
  studentButton:{
    borderWidth:1, 
    margin: 5, 
    padding: 5, 
  }, 
  coachButton: {
    borderWidth:1, 
    margin: 5, 
    padding: 5, 
  }, 
  signUpButton: {
    marginTop: "12%", 
    borderWidth: 1, 
    borderRadius: 3, 
    width: 90,
    height: 30, 
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  gmailButton: {
    marginTop: '10%', 
    borderWidth: 1, 
    borderRadius: 30, 
    marginTop: '10%', 
    height: 30, 
    width: 30, 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
  signInView: {
    marginTop: "10%", 
    alignItems: 'center', 
  }, 
  signInButton:{

  }, 
  signInButtonText:{
    fontWeight: 'bold', 
    textDecorationLine: 'underline'
  }, 
})
