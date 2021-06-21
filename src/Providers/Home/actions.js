import database from '@react-native-firebase/database';
let config=require('../../service.json')
// firebase.initializeApp(config);
export async function getHomeData(type){
   try{
    const reference = await database()
    .ref(type)
    .once('value')
    .then(snapshot => {
        return snapshot.val()
    });
    
       console.log('User data: ',reference)
   return reference
   }catch(e){
      console.log(e)
      return e
   }

}