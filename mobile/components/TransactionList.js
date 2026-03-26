import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const TransactionList = ({ data }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Recent activity</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
            <Text style={[styles.amount, item.type === 'credit' ? styles.credit : styles.debit]}>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    marginBottom: 24,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    padding: 18,
    shadowColor: '#111827',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  title: {
    color: '#101827',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 15,
    color: '#1A2233',
    fontWeight: '600',
  },
  timestamp: {
    marginTop: 3,
    fontSize: 12,
    color: '#81899B',
  },
  amount: {
    fontSize: 15,
    fontWeight: '700',
  },
  credit: {
    color: '#0F9D67',
  },
  debit: {
    color: '#D14343',
  },
  separator: {
    height: 14,
  },
});

export default TransactionList;
