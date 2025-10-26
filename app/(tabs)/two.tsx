import { useUser } from '@/contexts/UserContext';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  const { userEmail } = useUser();
  const displayEmail = userEmail || 'No email disponible';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.email}>{displayEmail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  email: {
    fontSize: 20,
    fontWeight: '600',
    color: '#007AFF',
  },
});
