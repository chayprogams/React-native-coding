import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Tracker = axios.create({
baseURL:'https://lovely-animals-help.loca.lt'
});
Tracker.interceptors.request.use(
   async (config)=>{
const token = await AsyncStorage.getItem('token');
if(token){
    config.headers.Authorization = `Bearer ${token}`;
}
return config;
    },
    (err)=>{
        return Promise.reject(err);
    }
)
export default Tracker;