import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useState,useCallback } from 'react';
import debounce from 'lodash.debounce';
const AuthForm = ({buttontitle,errormessage,redirect,headingtext}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (value) => {
        setEmail(value);
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
    };
    const handleSignUpErrorMessage = () => {
        if (!email || !password) {
            // setError('Email and password are required.');
            return;
        } else {
            redirect({ email, password });
        }
    };
    const handleSignInErrorMessage = () => {
        if (!email || !password) {
            // setError('Email and password are required.');
            return;
        } else {
            redirect({ email, password });
        }
    }
    const DebounceEmailChange = useCallback(debounce(handleEmailChange, 2000), []);
    const DebouncePasswordChange = useCallback(debounce(handlePasswordChange, 2000), []);
  return (
    <>
      <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/tracking.jpg')}
                />
                <Text style={styles.title}>{headingtext} to your account</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Email address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        onChangeText={DebounceEmailChange}
                    />
                </View>

                <View style={styles.formGroup}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={styles.forgotPassword}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        autoCapitalize="none"
                        autoCompleteType="password"
                        textContentType="password"
                        onChangeText={DebouncePasswordChange}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title={buttontitle}
                        onPress={buttontitle == 'Sign Up'?handleSignUpErrorMessage:handleSignInErrorMessage}
                        color="#4f46e5"
                    />
                </View>
                {errormessage ? (
                    <View>
                        <Text style={styles.errors}>{errormessage}</Text>
                    </View>
                ) : null}
        
            </View>
</View>
    </>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 48,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        height: 60,
        width: 90,
    },
    title: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1f2937',
    },
    formContainer: {
        marginTop: 20,
    },
    formGroup: {
        marginBottom: 24,
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1f2937',
    },
    forgotPassword: {
        fontSize: 14,
        fontWeight: '600',
        color: '#4f46e5',
    },
    input: {
        marginTop: 8,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#d1d5db',
        fontSize: 16,
        color: '#1f2937',
    },
    buttonContainer: {
        marginTop: 20,
    },
    errors: {
        color: 'red',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
    },
});

export default AuthForm
