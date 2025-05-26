import { SafeAreaView} from "react-native-safe-area-context";
import {Text, Image, View, TextInput, TouchableOpacity, Pressable, ScrollView} from 'react-native'
import { useState } from "react";
import styles from '../styles.js'
import authStyles from "./styles.js";
import Button from "../../components/Button.jsx";
import { router } from "expo-router";

import Ionicons from '@expo/vector-icons/Ionicons';



 const Login = ()=>{


    const [passwordShown, setPasswordShown] = useState(false)
    const [passwordFocused , setPasswordFocused] = useState(false)

    return(
        <SafeAreaView style={styles.container}>
           <Image source={require('../../assets/images/logo.png')} resizeMode="center" style={authStyles.image}/>

           <ScrollView>

          

           <Text style={authStyles.authText}>Sign In</Text>

           <View style={authStyles.secondaryContainer}>

            <View style={authStyles.formContainer}>
                <Text style={authStyles.formText}>Email</Text>
                <TextInput style={authStyles.input}/>
            </View>

            <View style={authStyles.formContainer}>
                <Text style={authStyles.formText}>Password</Text>




                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#1E1E2D', borderRadius:8, paddingRight:20, borderWidth:passwordFocused ? 1 : 0, borderColor: passwordFocused ? "#FF8F01": 'transparent'}}>

                <TextInput style={[authStyles.input, {width:'90%'}]} secureTextEntry={!passwordShown} cursorColor={'#FF8F01'} onBlur={()=>{
                    setPasswordFocused(false)
                }}  onFocus={()=>{

                    setPasswordFocused(true)
                  
                }}/>
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


                <TouchableOpacity>

                <Text style={{fontFamily:'PoppinsRegular', color:'#CDCDE0', textAlign:'right'}}>Forgot Password?</Text>

                </TouchableOpacity>
            </View>

           

           </View>

           <View style={authStyles.buttonContainer}>
            <Button text={'Log In'} onPress={()=>{

                router.navigate('/home')

            }}/>
           </View>


           <TouchableOpacity onPress={()=> router.navigate('/signUp')}>
                <Text style={authStyles.footerNote}>Don't have an account? <Text style={authStyles.auth}>Signup</Text></Text>

           </TouchableOpacity>

           </ScrollView>

           

        </SafeAreaView>
    )
 }


export default Login;