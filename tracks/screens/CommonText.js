import { View,Text,TouchableOpacity,StyleSheet } from "react-native"
import { useNavigationContext } from "../NavigationContext"
const CommonText = ({text,navtext}) => {
    const navigation = useNavigationContext();
  return (
    <View>
        <Text style={styles.footerText}>
                {text}{' '}
                <TouchableOpacity onPress={() => {navtext == 'Please login'?navigation.navigate('Signin'):navigation.navigate('Signup') }}>
                    <Text style={styles.signUpLink}>{navtext}</Text>
                </TouchableOpacity>
         </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    footerText: {
        marginTop: 40,
        textAlign: 'center',
        fontSize: 14,
        color: '#6b7280',
    },
    signUpLink: {
        fontWeight: '600',
        color: '#4f46e5',
    },
})
export default CommonText
