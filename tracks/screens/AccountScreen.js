import { View,Text,Button } from "react-native";
import { useContext } from "react";
import { SafeAreaView } from "react-native";
import { Context } from "../Context/GlobalContext";
const AccountScreen = () =>{
    const{signout} = useContext(Context);
return (
    <SafeAreaView>
<View>
<Button title="Sign Out" onPress={()=>signout()}/>
    </View>
    </SafeAreaView>
    
);
}
export default AccountScreen