import { View,Text,StyleSheet } from "react-native";
import { useContext } from "react";
import { TrackContext } from "../Context/TrackContext";
import MapView from "react-native-maps";
import { Polyline } from "react-native-maps";
const TrackDetailScreen = ({route}) =>{
    const{state} = useContext(TrackContext);
    const{_id} = route.params;
    const track = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;
return (
    <View>
<Text style={{fontSize:30}}>{track.name}</Text>
<MapView initialRegion={{
    latitudeDelta:0.01,
    longitudeDelta:0.01,
    ...initialCoords
}} style={styles.map}>
    <Polyline coordinates={track.locations.map((loc)=>loc.coords)} />
</MapView>
    </View>
);
}
const styles = StyleSheet.create({
    map:{
        height:300
    }
})
export default TrackDetailScreen