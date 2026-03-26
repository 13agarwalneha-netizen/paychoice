import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const tabs = [
  { key: 'Accounts', icon: 'credit-card' },
  { key: 'Circle', icon: 'users' },
  { key: 'Transfer', icon: 'repeat' },
  { key: 'Pulse', icon: 'activity' },
];

const BottomNav = () => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = tab.key === 'Accounts';
        return (
          <Pressable key={tab.key} style={styles.tab}>
            <Feather name={tab.icon} size={16} color={active ? '#FFFFFF' : '#ACB4C5'} />
            <Text style={[styles.label, active && styles.activeLabel]}>{tab.key}</Text>
            {active ? <View style={styles.activeIndicator} /> : null}
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 20,
    borderRadius: 24,
    backgroundColor: '#111827',
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 5,
  },
  label: {
    color: '#ACB4C5',
    fontSize: 12,
    fontWeight: '600',
  },
  activeLabel: {
    color: '#FFFFFF',
  },
  activeIndicator: {
    width: 22,
    height: 3,
    borderRadius: 99,
    backgroundColor: '#4F8CFF',
  },
});

export default BottomNav;
