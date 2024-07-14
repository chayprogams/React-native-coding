import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Tracker = axios.create({
baseURL:'https://3ffd-2405-201-c001-c08d-f64c-ffff-5f1-c99a.ngrok-free.app'
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