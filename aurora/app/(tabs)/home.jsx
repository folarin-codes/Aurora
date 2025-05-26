import { Image, StyleSheet, Platform , View, Text, SafeAreaView, TextInput, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import COLORS from '../../constants/Colors';
import axios from 'axios'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { Route } from 'expo-router/build/Route';


export default function HomeScreen() {



  const [topMoviesData , setTopMoviesData] = useState([]);
  const [query , setQuery] = useState('');


  console.log('user query ', query)


  // console.log('My movie data ', topMoviesData[1]);


  const getMovieData = async ()=>{


    try{


      // const options = {
      //   method: 'GET',
      //   url: 'https://imdb236.p.rapidapi.com/imdb/lowest-rated-movies',
      //   headers: {
      //     'x-rapidapi-key': '05f1179be4mshfdce8c5340638d0p1a85f3jsn97608f89afcf',
      //     'x-rapidapi-host': 'imdb236.p.rapidapi.com'
      //   }
      // };


      const options = {
        method: 'GET',
        url: 'https://imdb236.p.rapidapi.com/api/imdb/top-box-office',
        headers: {
          'x-rapidapi-key': '05f1179be4mshfdce8c5340638d0p1a85f3jsn97608f89afcf',
          'x-rapidapi-host': 'imdb236.p.rapidapi.com'
        }
      };


      const response = await axios.request(options);




      setTopMoviesData(response.data)

      // const data = await axios.get('https://imdb236.p.rapidapi.com/imdb/lowest-rated-movies', {
      //   headers:{
      //     'x-rapidapi-key': '05f1179be4mshfdce8c5340638d0p1a85f3jsn97608f89afcf',
      //     'x-rapidapi-host': 'imdb236.p.rapidapi.com'

      //   }
      // })

    }

    catch(error){

      console.log('error ', error)

    }

  }


  useEffect(()=>{

    getMovieData()

  }, [])







  return (
    <SafeAreaView style={styles.container}>

      <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:30, alignItems:'center'}}>

        <View>
          <Text style={{color:'#CDCDE0', fontFamily:'PoppinsRegular'}}>Welcome Back</Text>
          <Text style={{color:'white', fontFamily:'semibold', fontSize:24}}>Suberu Micheal</Text>
        </View>

        <Image source={require('../../assets/images/logo2.png')} resizeMode='contain' style={{height:30 , width:34}}/>

      </View>

      <View style={{flexDirection:'row', alignItems:'center', backgroundColor:COLORS.background2, borderRadius:8, paddingRight:20, marginTop:30}}>

        <TextInput  style={{ height:58,
        backgroundColor:COLORS.background2,
        fontFamily:'PoppinsRegular',
        color:COLORS.white,
        paddingLeft:20, width:'90%',borderRadius:8}} placeholder='Search for a video topic' placeholderTextColor={COLORS.text}
        onChangeText={(text)=>  setQuery(text)}
        
        
        />
        <AntDesign name="search1" size={24} color="white"/>
      </View>

      <View style={{marginVertical:30}}>
        <Text style={{fontFamily:'PoppinsBold', color:COLORS.text, fontSize:20}}>Trending Videos</Text>
      </View>
{/* 
      <View style={{flexDirection:'row', position:'absolute', top:'38%', right:-25}}>

       <Image style={{height:250, width:148, borderRadius:8}} resizeMode='contain' source={require('../../assets/images/Card2.png')}/>

       <Image style={{height:268, width:168, borderRadius:8, position:'relative', top:-20}} resizeMode='contain' source={require('../../assets/images/Card1.png')}/>

       <Image style={{height:250, width:148, borderRadius:8}} resizeMode='contain' source={require('../../assets/images/Card3.png')}/>
      </View> */}


    

      <View style={{marginBottom:300}}>

    
        <FlatList

        data={topMoviesData.filter(movie=>{

       const film = movie.originalTitle?.toLowerCase().includes(query.toLowerCase())

       return film;




        })}

        renderItem={(movie)=>{
      
          return(
    
            <TouchableOpacity 

            onPress={()=>{
              router.push({
                pathname : '/details',

                params:{film : JSON.stringify(movie)}

              })

            }}
            
            
            // onPress={()=> router.push({
            //   pathname: '/details',
            //   params: { movie: JSON.stringify(movie) }
            // })} 
            
            
            style={{marginVertical:20}}>

              <Image 
                style={{width: "100%", height: 500, borderRadius:8}}
                source={{uri: String(movie?.item?.primaryImage)}}
                resizeMode="contain"
              />

              <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:15}}>


              <Text style={{color:'white', fontFamily:'PoppinsBold', fontSize:20}}>{movie?.item?.originalTitle}</Text>

              <Text style={{color:COLORS.primary, fontFamily:'semibold'}}>{movie.item.averageRating}</Text>

              </View>


              <Text style={{color:'white', fontFamily:'semibold', textAlign:"justify"}}>{movie.item.description}</Text>

            </TouchableOpacity>


            
          )
        }}


        ListEmptyComponent={()=>{
          return(
            <View>
              <ActivityIndicator size={'large'} color={COLORS.primary}/>
            </View>
          )
        }}
        
        />



      </View>


    
    </SafeAreaView>
    
  );
}




