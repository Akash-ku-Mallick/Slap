import { View, Text } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";

const AuthModal = () => {
  const [ modalId, setModalId ] = useState(0);
  return (
    <Modal>
      {
        modalId == 0 ? <Login_Screen setModalId={setModalId} /> :
        modalId == 1 ? <Signup_Screen setModalId={setModalId} /> :
        modalId == 2 ? <ForgotPassword_Screen setModalId={setModalId} /> :
        modalId == 3 ? <ResetPassword_Screen setModalId={setModalId} /> :
        null
      }
    </Modal>
  )
}

const Login_Screen = ({ setModalId }) => {
  return (
    <View>
      <Text>Login_Screen</Text>
      
    </View>
  )
}

const Signup_Screen = ({ setModalId }) => {
  return (
    <View>
      <Text>Signup_Screen</Text>
    </View>
  )
}

const ForgotPassword_Screen = ({ setModalId }) => {
  return (
    <View>
      <Text>ForgotPassword_Screen</Text>
    </View>
  )
}

const ResetPassword_Screen = ({ setModalId }) => {
  return (
    <View>
      <Text>ResetPassword_Screen</Text>
    </View>
  )
}

const Profile_Screen = () => {
  return (
    <View>
      <Text>Profile_Screen</Text>
    </View>
  )
}

export { AuthModal, Login_Screen, Signup_Screen, ForgotPassword_Screen, ResetPassword_Screen, Profile_Screen}