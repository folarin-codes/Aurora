import {View , Text, Image} from 'react-native'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/Colors';
import Button from '../components/Button';


const Page = ()=>{

    return(

        <SafeAreaView style={styles.container}>
           <Image resizeMode='center' source={require('../assets/images/logo.png')} style={{width:115, alignSelf:'center'}}/>

           <Image resizeMode='center' source={require('../assets/images/onboarding.png')} style={{ width:350, height:295, alignSelf:'center'}}/>

           <View>

            <Text style={{color:'white', fontFamily:'PoppinsBold', textAlign:'center', fontSize:30, marginTop:10}}>Discover Endless Possibilities with <Text style={{color:COLORS.primary}}>Aora</Text> </Text>
            <Image resizeMethod='contain' source={require('../assets/images/path.png')} style={{width:70, height:13, position:'absolute', right:20, bottom:5}} />

           </View>


           <Text style={{color:COLORS.text, textAlign:'center', fontFamily:'PoppinsRegular'}}>Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>


           <View style={{marginTop:40}}>


            <Button text={'Continue with Email'}/>

           </View>




        </SafeAreaView>

    )

}


export default Page;