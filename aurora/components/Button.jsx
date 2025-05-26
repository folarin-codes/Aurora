import { TouchableOpacity, Text } from "react-native"
import COLORS from "../constants/Colors";



const Button = ({text, onPress, textColor})=>{

    return(
        <TouchableOpacity onPress={onPress} style={{height:58, backgroundColor:COLORS.primary, borderRadius:8,  justifyContent:'center'}}>
            <Text style={{textAlign:'center', color:textColor ? textColor : '#161622', fontFamily:'semibold', }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;


