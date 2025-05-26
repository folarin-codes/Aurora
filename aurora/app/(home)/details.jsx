import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Image, View, Pressable , Linking, TouchableOpacity, Alert, ScrollView} from "react-native"
import { useLocalSearchParams } from "expo-router"
import styles from '../(tabs)/styles'
import COLORS from "../../constants/Colors"
import Button from "../../components/Button"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router"
import WebView from "react-native-webview"


const Details = ()=>{


    const data = useLocalSearchParams();

    const movie = JSON.parse(data.film)


    const saveToWatchLater = async ()=>{

      try{


        await AsyncStorage.setItem('movie', JSON.stringify(movie.item), (e)=>{

         

        }).then((e)=>{

          // Alert.alert('Success!!!', "You have successfully saved " + movie.item.originalTitle + " to your bookmark")


          Alert.alert("Sucess!!!", ` You have successfully saved ${movie.item.originalTitle}} to your bookmark.`, [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])


        }).catch((error)=>{

          console.log('an action occured for catch block', error)

          Alert.alert("Error!!!", ` There was an error saving ${movie.item.originalTitle}} to your bookmark.`)

        })

      }

      catch(e){

        Alert.alert('Error!!!', "There was an error saving the movie");

      }
    }

   

    return(
        <SafeAreaView style={[styles.container, ]}>


          <Pressable onPress={()=>{

            router.back()

          }} style={{marginLeft:'5%', marginBottom:'10'}}>

          <Ionicons name="arrow-back" size={24} color="white" />

          </Pressable>



          <ScrollView >

         


          <TouchableOpacity onPress={()=>{

            // Linking.openURL(movie.item.trailer)

          }}>

          <Image 
              style={{width: "100%", height: 500, borderRadius:8}}
              source={{uri: String(movie?.item?.primaryImage)}}
              resizeMode="contain"
            
            />


          </TouchableOpacity>

            <View style={{paddingHorizontal:'5%'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:15}}>


            <Text style={{color:'white', fontFamily:'PoppinsBold', fontSize:20}}>{movie?.item?.originalTitle}</Text>

            <Text style={{color:COLORS.primary, fontFamily:'semibold'}}>{movie.item.averageRating}</Text>

            </View>

            <View>
                
              <Text style={{color:'white', fontFamily:'semibold', textAlign:"justify"}}>{movie.item.description}</Text>
            </View>


            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{color:'white', fontFamily:'PoppinsBold', fontSize:20}}>Budget:</Text>
                <Text style={{color:COLORS.primary, fontFamily:'semibold'}}>${movie.item.budget}</Text>
            </View>


            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{color:'white', fontFamily:'PoppinsMedium', fontSize:16}}>Content rating:</Text>
                <Text style={{color:COLORS.primary, fontFamily:'semibold'}}>{movie.item.contentRating}</Text>
            </View>



            {/* {
              movie.item.trailer && (
                <View style={{ height: 300, width: '100%', marginTop: 20 }}>
                  <WebView 
                    source={{ uri: movie.item.trailer }} 
                    style={{ flex: 1 }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    allowsFullscreenVideo={true}
                  />
                </View>
              )
            } */}



            <Text style={{fontFamily:'PoppinsBold', color:'white', marginTop:30, fontSize:20}}>Trailer :</Text>



            {
              movie.item.trailer && (

                <View style={{height:200 , width:'100%', marginVertical:30}}>
                  <WebView 
                  
                  source={{uri : movie.item.trailer}}
                  style={{flex:1}}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  allowsFullscreenVideo={true}


                  
                  />
                </View>

              )
            }










            <View style={{marginVertical:30}}>

            <Button text={'Watch Later'} onPress={()=>{

              saveToWatchLater()

            }} />

            </View>





            </View>

            </ScrollView>


        </SafeAreaView>
    )
}

export default Details;