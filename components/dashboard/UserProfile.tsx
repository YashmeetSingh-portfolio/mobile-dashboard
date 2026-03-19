//this is user profile card component.

import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function UserProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarPlaceholder}>
        <Text style={styles.avatarText}>JD</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>Welcome back,</Text>
        <Text style={styles.name}>John Doe</Text>
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>PRO</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  greeting: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  name: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: '600',
    marginTop: 2,
  },
  badge: {
    backgroundColor: Colors.surfaceHighlight,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: Colors.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
});