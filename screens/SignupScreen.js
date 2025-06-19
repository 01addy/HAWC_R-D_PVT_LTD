import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { saveUser, checkUserExists } from '../utils/storage';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    validateEmail(email);
    validatePassword(password);
  }, [email, password]);

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    if (!email) setEmailError('Email is required.');
    else if (!regex.test(email)) setEmailError('Invalid email format.');
    else setEmailError('');
  };

  const validatePassword = (password) => {
    if (!password) setPasswordError('Password is required.');
    else if (password.length < 6) setPasswordError('Password must be at least 6 characters.');
    else setPasswordError('');
  };

  const handleSignup = async () => {
    if (emailError || passwordError || !email || !password) {
      Alert.alert('Error', 'Please correct the errors before submitting.');
      return;
    }

    try {
      const exists = await checkUserExists(email);
      if (exists) {
        Alert.alert('Error', 'User already exists!');
        return;
      }

      await saveUser(email, password);
      Alert.alert('Success', 'User registered!');
      navigation.navigate('Login');
    } catch (err) {
      console.error('Error saving user:', err);
      Alert.alert('Error', 'Failed to register user.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>HAWC Signup</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, justifyContent: 'center', backgroundColor: '#fff' },
  logo: { fontSize: 28, marginBottom: 40, textAlign: 'center', fontWeight: 'bold', color: '#2e78b7' },
  input: { borderWidth: 1, borderColor: '#999', padding: 12, marginBottom: 10, borderRadius: 5 },
  error: { color: 'red', marginBottom: 10, marginLeft: 2, fontSize: 13 },
  button: { backgroundColor: '#2e78b7', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 10, marginBottom: 15 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  link: { color: '#2e78b7', textAlign: 'center' },
});
