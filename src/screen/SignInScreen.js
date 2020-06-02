import React, {useState, useEffect} from 'react'
import  { StyleSheet,View, Text, Alert, SafeAreaView, Image, KeyboardAvoidingView } from 'react-native'
import Button from '../components/Button'
import Strings from '../const/String'
import EmailTextField from '../components/EmailTextField'
import Color from '../utils/Color'
import images from '../const/Images'
import constants from '../const/Constants'
import DismissKeyboard from '../components/EmailTextField'
import Utility from '../utils/utility'

function SignInScreen(){
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [passwordError,setPasswordError] = useState('')
const [emailError,setEmailError] = useState('')
const [isLoading,setIsLoading] = useState('')

validateEmailAddress = () => {
    const isValidEmail= Utility.isEmailValid(email)
    isValidEmail ? setEmailError('') : setEmailError(Strings.InvalidEmailAddress)
    return isValidEmail
}

validatePasswordField = () => {
    const isValidField= Utility.isValidField(password)
    isValidEmail ? setPasswordError('') : setPasswordError(Strings.PasswordFieldEmpty)
    return isValidField
}



    return(
    <DismissKeyboard>
        <KeyboardAvoidingView style = {style.container} behavior= "padding" enabled>
            <View>
                <SafeAreaView>
                    <Image style= {styles.logo} source = {Images.logo}></Image>

                    <EmailTextField
                    term={email}
                    error={emailError}
                    placeHolder={Strings.EmailPlaceHolder}
                    onTermChange={newEmail => setEmail(newEmail)}
                    onValidateEmailAddress = {validateEmailAddress}
                    />  
                    <PasswordTextField
                    term={password}
                    error={passwordError}
                    placeHolder={Strings.PasswordPlaceHolder}
                    onTermChange={newPassword => setpassword(newPassword)}
                    onValidatePasswordTextField = {validatePasswordField}
                    />
                    <Button title={Strings.Join}/>                      
                    </SafeAreaView>            
            </View>
        </KeyboardAvoidingView>
    </DismissKeyboard>
    )
}

const styles = StyleSheet.create({
    logo:{
        alignSelf: 'center',
        margin: 0.04 * constants.screenHeight
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Color.theme
    }
    
})
export default SignInScreen
