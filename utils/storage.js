// utils/storage.js
import * as FileSystem from 'expo-file-system';

const fileUri = FileSystem.documentDirectory + 'users.json';

export const saveUser = async (email, password) => {
  try {
    let users = [];

    const fileExists = await FileSystem.getInfoAsync(fileUri);
    if (fileExists.exists) {
      const content = await FileSystem.readAsStringAsync(fileUri);
      users = JSON.parse(content)?.users || [];
    }

    users.push({ email, password });

    await FileSystem.writeAsStringAsync(
      fileUri,
      JSON.stringify({ users }),
      { encoding: FileSystem.EncodingType.UTF8 }
    );
  } catch (err) {
    console.error('Error saving user:', err);
    throw err;
  }
};

export const checkUserExists = async (email) => {
  try {
    const fileExists = await FileSystem.getInfoAsync(fileUri);
    if (!fileExists.exists) return false;

    const content = await FileSystem.readAsStringAsync(fileUri);
    const users = JSON.parse(content)?.users || [];

    return users.some(user => user.email === email);
  } catch (err) {
    console.error('Error checking user:', err);
    return false;
  }
};

export const findUser = async (email, password) => {
  try {
    const fileExists = await FileSystem.getInfoAsync(fileUri);
    if (!fileExists.exists) return null;

    const content = await FileSystem.readAsStringAsync(fileUri);
    const users = JSON.parse(content)?.users || [];

    return users.find(user => user.email === email && user.password === password) || null;
  } catch (err) {
    console.error('Error finding user:', err);
    return null;
  }
};
