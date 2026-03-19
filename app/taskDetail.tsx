//this is the task details screen it shows details of the active tasks when clicked

import { useLocalSearchParams, router } from 'expo-router';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export default function TaskDetails() {
  const { title, category, status } = useLocalSearchParams();
const insets = useSafeAreaInsets();
  // Defensive check: Ensure we have strings to render
  const displayTitle = typeof title === 'string' ? title : Array.isArray(title) ? title[0] : 'No Title';
  const displayCategory = typeof category === 'string' ? category : 'General';
  const displayStatus = typeof status === 'string' ? status : 'Pending';

  return (
 <View style={[
      styles.container, 
      { paddingTop: insets.top, paddingBottom: insets.bottom } // Dynamic safe padding
    ]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton} hitSlop={20}>
          <Ionicons name="close-circle" size={32} color={Colors.textSecondary} />
        </Pressable>
        <Text style={styles.headerTitle}>Task Details</Text>
        <View style={{ width: 32 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.label}>Category</Text>
          {/* Using the safe variable */}
          <Text style={styles.categoryText}>{displayCategory}</Text>

          <Text style={[styles.label, { marginTop: 20 }]}>Task Title</Text>
          {/* Using the safe variable */}
          <Text style={styles.titleText}>{displayTitle}</Text>

          <View style={styles.separator} />

          <View style={styles.statusRow}>
            <Text style={styles.label}>Current Status</Text>
            <View style={[
              styles.badge, 
              { backgroundColor: displayStatus === 'Completed' ? Colors.success + '20' : Colors.primary + '20' }
            ]}>
              <Text style={[
                styles.badgeText, 
                { color: displayStatus === 'Completed' ? Colors.success : Colors.primary }
              ]}>
                {displayStatus}
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.footerNote}>
          This task was assigned to the current sprint. Detailed logs and sub-tasks are available in the project management console.
        </Text>
      </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    
      },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  },
  label: {
    color: Colors.textSecondary,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: '600',
  },
  categoryText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
  titleText: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 24,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  footerNote: {
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 30,
    lineHeight: 20,
    fontSize: 14,
    paddingHorizontal: 20,
  }
});