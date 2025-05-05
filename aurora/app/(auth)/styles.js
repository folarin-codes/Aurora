


import { StyleSheet } from "react-native";
import COLORS from "../../constants/Colors";


const authStyles = StyleSheet.create({
    authText:{
        fontFamily:'semibold',
        color:COLORS.white,
        fontSize:22
    },
    secondaryContainer:{
        marginTop:30

    },


    formContainer:{
        gap:10,
        marginVertical:10


    },
    formText:{
        fontFamily:'medium',
        fontSize:16,
        color:COLORS.text2

    },
    input:{
        height:58,
        backgroundColor:COLORS.background2,
        borderRadius:8,
        color:COLORS.white,
        paddingLeft:20


    },
    buttonContainer:{
        marginVertical:20
    },

    footerNote:{
        color:COLORS.white,
        textAlign:'center',
        fontFamily:'PoppinsRegular',

    },
    auth:{
        color:COLORS.primary,
        fontFamily:'semibold'
    },
    image:{
        width:115
    }

    
})

export default authStyles;