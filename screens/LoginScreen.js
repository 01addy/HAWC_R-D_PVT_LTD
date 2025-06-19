import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { findUser } from '../utils/storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const togglePasswordVisibility = () => setSecureText(!secureText);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    try {
      const user = await findUser(email, password);
      if (user) {
        Alert.alert('Login Successful', `Welcome back, ${email}`, [
          {
            text: 'OK',
            onPress: () => navigation.navigate('AboutDeveloper'),
          },
        ]);
      } else {
        Alert.alert('Login Failed', 'Invalid email or password.');
      }
    } catch (err) {
      console.error('Login error:', err);
      Alert.alert('Error', 'Something went wrong while logging in.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HAWC Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={secureText}
        placeholderTextColor="#888"
      />

      <TouchableOpacity onPress={togglePasswordVisibility}>
        <Text style={styles.link}>
          {secureText ? 'Show Password' : 'Hide Password'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>New here? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#f4f4f4' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 32, textAlign: 'center', color: '#333' },
  input: { borderWidth: 1, borderColor: '#aaa', padding: 12, borderRadius: 8, marginBottom: 16, backgroundColor: '#fff' },
  button: { backgroundColor: '#0084ff', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  link: { color: '#0084ff', textAlign: 'center', marginTop: 12 },
});
