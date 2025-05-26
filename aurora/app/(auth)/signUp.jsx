import { SafeAreaView} from "react-native-safe-area-context";
import {Text, Image, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, Pressable} from 'react-native'
import styles from '../styles.js'
import authStyles from "./styles.js";
import Button from "../../components/Button.jsx";
import { Link, router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
// import COLORS from "../../constants/Colors.js";



 const SignUp = ()=>{


    const [passwordShown, setPasswordShown] = useState(false)
    const [usernameFocused , setUsernameFocused] = useState(false)
    const [emailFocused , setEmailFocused] = useState(false)
    const [passwordFocused , setPasswordFocused] = useState(false)






    return(

        // <KeyboardAvoidingView>

 
        <SafeAreaView style={styles.container}>

            
        <Image source={require('../../assets/images/logo.png')} resizeMode="center" style={authStyles.image}/> 

        <ScrollView>


            <Text style={authStyles.authText}>Sign Up</Text>


           <View style={authStyles.secondaryContainer}>

            <View style={authStyles.formContainer}>
                <Text style={authStyles.formText}>Username</Text>
                <TextInput style={[authStyles.input, {borderWidth:usernameFocused ? 1 : 0, borderColor: usernameFocused ? "#FF8F01": 'transparent'}]} cursorColor={'#FF8F01'} onFocus={()=>{
                    setUsernameFocused(true)
                }} onBlur={()=>{
                    setUsernameFocused(false)
                }}/>
            </View>

            <View style={authStyles.formContainer}>
                <Text style={authStyles.formText}>Email</Text>
                <TextInput placeholder="abcd@gmail.com" placeholderTextColor={'white'} style={[authStyles.input, {borderWidth:emailFocused ? 1 : 0, borderColor: emailFocused ? "#FF8F01": 'transparent'}]} cursorColor={'#FF8F01'} onFocus={()=>{
                    setEmailFocused(true)
                }} onBlur={()=>{
                    setEmailFocused(false)
                }} keyboardType="email-address"/>
            </View>

            <View style={authStyles.formContainer}>
                <Text style={authStyles.formText}>Password</Text>


                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#1E1E2D', borderRadius:8, paddingRight:20, borderWidth:passwordFocused ? 1 : 0, borderColor: passwordFocused ? "#FF8F01": 'transparent'}}>


                <TextInput style={[authStyles.input, {width:'90%'}]} secureTextEntry={!passwordShown} cursorColor={'#FF8F01'} onBlur={()=>{
                    setPasswordFocused(false)
                }}  onFocus={()=>{

                    setPasswordFocused(true)
                  
                }}

                keyboardType="default"
                
                />
                <View >

                        {
                            passwordShown ? <Pressable onPress={()=>{

                                setPasswordShown(false)

                                setPasswordFocused(true)


                            }}>
                                <Ionicons name="eye-off" size={20} color="#7B7B8B" />
                            </Pressable> :   <Pressable onPress={()=>{
                                setPasswordShown(true)
                                setPasswordFocused(true)
                            }}>

                                <Ionicons name="eye" size={20} color="#7B7B8B" />

                            </Pressable>
                        }


                        </View>

                </View>
                
            </View>

           </View>

           <View style={authStyles.buttonContainer}>
            <Button text={'Sign Up'} onPress={()=> router.push('/home')}/>
           </View>


           {/* <Link href={'/app/(tabs)/explore.tsx'}>

           <Text style={{color:'red'}}>Move me</Text>
           </Link> */}


           <TouchableOpacity onPress={()=> router.navigate('/login')}>
                <Text style={authStyles.footerNote}>Already have an account? <Text style={authStyles.auth}>Login</Text></Text>

               

           </TouchableOpacity>


           </ScrollView>



           

        </SafeAreaView>
        
    )
 }


export default SignUp;