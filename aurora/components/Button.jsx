import { TouchableOpacity, Text } from "react-native"
import COLORS from "../constants/Colors";



const Button = ({text})=>{
    return(
        <TouchableOpacity style={{height:58, backgroundColor:COLORS.primary, borderRadius:8,  justifyContent:'center'}}>
            <Text style={{textAlign:'center', color:COLORS.text, fontFamily:'semibold', color:'#161622'}}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;


