// screens/AboutDeveloper.js
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function AboutDeveloper({ navigation }) {
  const handleResumeDownload = () => {
    Linking.openURL('https://drive.google.com/file/d/1_lxsJGfzZdHv1ou3ZmRSu6Eus55oIHRF/view?usp=sharing');
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>About the Developer</Text>

      <View style={styles.card}>
        <Text style={styles.name}>Aditya Pratap Singh</Text>
        <Text style={styles.subtitle}>A Passionate Developer</Text>
        <Text style={styles.desc}>
          A highly skilled developer specializing in modern web applications.
          Passionate about crafting seamless user experiences with creativity & innovation.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Who Am I?</Text>
        <Text style={styles.sectionText}>
          I combine technical proficiency with creativity to build scalable web applications.
          Proficient in React.js, Node.js, and MongoDB, always seeking innovative solutions.
        </Text>
        <TouchableOpacity onPress={handleResumeDownload}>
          <Text style={styles.link}>📄 Download Resume</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Get in Touch</Text>
        <Text style={styles.sectionText}>📞 Phone: <Text style={styles.link} onPress={() => Linking.openURL('tel:+918858066219')}>+91-8858066219</Text></Text>
        <Text style={styles.sectionText}>📧 Email: <Text style={styles.link} onPress={() => Linking.openURL('mailto:adityapratap.job@gmail.com')}>adityapratap.job@gmail.com</Text></Text>
        <Text style={styles.sectionText}>💻 GitHub: <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/01addy')}>01addy</Text></Text>
        <Text style={styles.sectionText}>🔗 LinkedIn: <Text style={styles.link} onPress={() => Linking.openURL('https://www.linkedin.com/in/adityapratap2712')}>Aditya Pratap Singh</Text></Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tech Stack Used</Text>

        <Text style={styles.stackHeader}>Frontend (Mobile)</Text>
        <Text style={styles.sectionText}>⚛️ React Native – Built with Expo</Text>
        <Text style={styles.sectionText}>📦 Expo – App bundler and dev toolchain</Text>
        <Text style={styles.sectionText}>🧭 React Navigation – For screen routing</Text>
        <Text style={styles.sectionText}>🎨 StyleSheet – For layout and styling</Text>
        <Text style={styles.sectionText}>🧩 Reusable Components – Header, PrimaryButton</Text>

        <Text style={styles.stackHeader}>Data Storage</Text>
        <Text style={styles.sectionText}>📄 FileSystem & AsyncStorage – Local JSON-based user data storage</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>🔙 Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9F5EC',
    padding: 20,
    paddingBottom: 100,
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#22643B',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#5c3ea0',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 10,
  },
  desc: {
    color: '#f3f3f3',
    textAlign: 'center',
    fontSize: 14,
  },
  section: {
    marginBottom: 25,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    color: '#22643B',
  },
  sectionText: {
    fontSize: 15,
    marginBottom: 6,
    color: '#333',
  },
  link: {
    color: '#22643B',
    textDecorationLine: 'underline',
  },
  stackHeader: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    color: '#444',
  },
  logoutButton: {
    backgroundColor: '#cc3333',
    padding: 15,
    paddingBottom: 40,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
