import { SafeAreaView} from "react-native-safe-area-context";
import {Text, Image, View, TextInput, TouchableOpacity} from 'react-native'
import styles from '../styles.js'
import authStyles from "./styles.js";
import Button from "../../components/Button.jsx";
import { router } from "expo-router";



 const Login = ()=>{
    return(
        <SafeAreaView style={styles.container}>
           <Image source={require('../../assets/images/logo.png')} resizeMode="center" style={authStyles.image}/>

           <Text style={authStyles.authText}>Sign In</Text>

           <View style={authStyles.secondaryContainer}>

            <View style={authStyles.formContainer}>
                <Text style={authStyles.formText}>Email</Text>
                <TextInput style={authStyles.input}/>
            </View>

            <View style={authStyles.formContainer}>
                <Text style={authStyles.formText}>Password</Text>
                <TextInput style={authStyles.input}/>

                <TouchableOpacity>

                <Text style={{fontFamily:'PoppinsRegular', color:'#CDCDE0', textAlign:'right'}}>Forgot Password?</Text>

                </TouchableOpacity>
            </View>

           

           </View>

           <View style={authStyles.buttonContainer}>
            <Button text={'Log In'}/>
           </View>


           <TouchableOpacity onPress={()=> router.navigate('/signUp')}>
                <Text style={authStyles.footerNote}>Don't have an account? <Text style={authStyles.auth}>Signup</Text></Text>

           </TouchableOpacity>

           

        </SafeAreaView>
    )
 }


export default Login;