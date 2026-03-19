// this is the details screen for the analytics section showing in depth information

import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ANALYTICS_DATA } from '../constants/Analytics'; // Import your data

export default function DetailsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
    
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <Pressable 
          onPress={() => router.back()} 
          style={styles.backButton}
          hitSlop={20}
        >
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </Pressable>
        <Text style={styles.headerTitle}>Analytics Detail</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.statsGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Total Tasks</Text>
           
            <Text style={styles.statValue}>{ANALYTICS_DATA.totalTasks}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Efficiency</Text>

            <Text style={[styles.statValue, { color: Colors.success }]}>
              {ANALYTICS_DATA.efficiency}
            </Text>
          </View>
        </View>

        <Text style={styles.description}>
          {ANALYTICS_DATA.description}
        </Text>
        
        <View style={styles.infoCard}>
          <Text style={{ color: Colors.textSecondary, fontWeight: '600' }}>System Logs:</Text>
          <Text style={styles.codeText}>
            {JSON.stringify(ANALYTICS_DATA.logs, null, 2)}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backButton: { marginRight: 16 },
  headerTitle: { color: Colors.text, fontSize: 20, fontWeight: 'bold' },
  content: { padding: 20 },
  statsGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  statBox: {
    backgroundColor: Colors.surface,
    padding: 20,
    borderRadius: 16,
    width: '48%',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  statLabel: { color: Colors.textSecondary, fontSize: 14, marginBottom: 8 },
  statValue: { color: Colors.text, fontSize: 24, fontWeight: 'bold' },
  description: { 
    color: Colors.textSecondary, 
    lineHeight: 24, 
    fontSize: 16, 
    marginBottom: 24,
    opacity: 0.9 
  },
  infoCard: { 
    backgroundColor: Colors.surfaceHighlight, 
    padding: 16, 
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border 
  },
  codeText: { 
    color: Colors.primary, 
    fontFamily: 'monospace', 
    marginTop: 8,
    fontSize: 13 
  }
});