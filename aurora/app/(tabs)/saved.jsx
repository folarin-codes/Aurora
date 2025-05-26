import { View , Text} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"


const Saved = ()=>{


    const [savedMovies , setSavedMovies] = useState()


    useEffect(()=>{




        console.log('My saved movie function')

        const getSavedMovie = async()=>{


            console.log('I was fired!!! ')

            try{

                const movie = await AsyncStorage.getItem('movie')

                const parsedMovied = JSON.parse(movie)

                setSavedMovies(parsedMovied)


                console.log('my saved movie ', movie)


            }

            catch(e){

                console.log('error ', e)

            }
        }


        getSavedMovie()

    }, [])


    return(
        <SafeAreaView style={styles.container}>

            <Text style={{color:'white'}}>{savedMovies?.originalTitle}</Text>

        </SafeAreaView>
       
    )
}

export default Saved