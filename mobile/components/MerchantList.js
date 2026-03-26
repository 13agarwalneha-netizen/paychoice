import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const MerchantList = ({ data }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Top merchants (last 30 days)</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.meta}>{item.txns} txns</Text>
            </View>
            <Text style={styles.amount}>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 28,
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
    paddingVertical: 4,
  },
  name: {
    color: '#19212E',
    fontSize: 15,
    fontWeight: '600',
  },
  meta: {
    marginTop: 3,
    color: '#7E889A',
    fontSize: 12,
  },
  amount: {
    color: '#111827',
    fontSize: 15,
    fontWeight: '700',
  },
  separator: {
    height: 12,
  },
});

export default MerchantList;
