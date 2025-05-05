import { SafeAreaView} from "react-native-safe-area-context";
import {Text, Image, View, TextInput, TouchableOpacity} from 'react-native'
import styles from '../styles.js'
import authStyles from "./styles.js";
import Button from "../../components/Button.jsx";
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import { useTheme } from "@react-navigation/native";



 const SignUp = ()=>{


    const [passwordShow, sePasswordShown] = useState(false);




    return(
        <SafeAreaView style={styles.container}>

            

            <Image source={require('../../assets/images/logo.png')} resizeMode="center" style={authStyles.image}/>

           

           <Text style={authStyles.authText}>Sign Up</Text>

           <View style={authStyles.secondaryContainer}>

            <View style={authStyles.formContainer}>
                <Text style={authStyles.formText}>Username</Text>
                <TextInput style={authStyles.input}/>
            </View>

            <View style={authStyles.formContainer}>
                <Text style={authStyles.formText}>Email</Text>
                <TextInput style={authStyles.input}/>
            </View>

            <View style={authStyles.formContainer}>
                <Text style={authStyles.formText}>Password</Text>
                <TextInput style={authStyles.input}/>

                <Ionicons name="eye" size={20} color="#7B7B8B" />

                <Ionicons name="eye-off" size={20} color="#7B7B8B" />
            </View>

           </View>

           <View style={authStyles.buttonContainer}>
            <Button text={'Sign Up'}/>
           </View>


           <TouchableOpacity onPress={()=> router.navigate('/login')}>
                <Text style={authStyles.footerNote}>Already have an account? <Text style={authStyles.auth}>Login</Text></Text>

               

           </TouchableOpacity>

           

        </SafeAreaView>
    )
 }


export default SignUp;