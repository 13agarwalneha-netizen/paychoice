import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import ProductCard from './components/ProductCard';
import MerchantList from './components/MerchantList';
import TransactionList from './components/TransactionList';
import BottomNav from './components/BottomNav';
import { merchants, products, transactions } from './data/mockData';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.root}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>ET</Text>
            </View>
            <Text style={styles.appName}>Ryze</Text>
            <View style={styles.iconWrap}>
              <Feather name="credit-card" size={18} color="#172136" />
            </View>
          </View>

          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            horizontal
            snapToInterval={316}
            decelerationRate="fast"
            disableIntervalMomentum
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardsContent}
            renderItem={({ item }) => <ProductCard {...item} />}
          />

          <MerchantList data={merchants} />
          <TransactionList data={transactions} />
        </ScrollView>

        <BottomNav />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  root: {
    flex: 1,
    position: 'relative',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121726',
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
  appName: {
    color: '#111827',
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8EDF8',
  },
  cardsContent: {
    paddingRight: 8,
  },
});

export default HomeScreen;
