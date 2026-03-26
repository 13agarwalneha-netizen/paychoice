import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

const productMeta = {
  vault: { accent: '#5BE7C4', subtitle: 'Checking Account' },
  booster: { accent: '#7BA8FF', subtitle: 'Credit Builder Card' },
  upfront: { accent: '#A58CFF', subtitle: 'Credit Card' },
};

const ProductCard = ({
  productType,
  title,
  balance,
  available,
  maskedCardNumber,
  subtext,
  paymentDue,
  minDue,
  autopayEnabled,
  actions = [],
}) => {
  const scale = useRef(new Animated.Value(1)).current;
  const meta = productMeta[productType] || productMeta.vault;
  const highlightedValue = available || balance;

  const animateTo = (toValue) => {
    Animated.spring(scale, {
      toValue,
      useNativeDriver: true,
      speed: 18,
      bounciness: 6,
    }).start();
  };

  return (
    <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
      <Pressable onPressIn={() => animateTo(0.985)} onPressOut={() => animateTo(1)} style={styles.pressArea}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={[styles.subtitle, { color: meta.accent }]}>{meta.subtitle}</Text>
          </View>
          <Text style={styles.maskedNumber}>{maskedCardNumber}</Text>
        </View>

        <View style={styles.balanceSection}>
          <Text style={styles.balanceValue}>{highlightedValue}</Text>
          <Text style={styles.subtext}>{subtext}</Text>
        </View>

        {(paymentDue || minDue) && (
          <View style={styles.paymentRow}>
            {paymentDue ? <Text style={styles.metaText}>Due: {paymentDue}</Text> : null}
            {minDue ? <Text style={styles.metaText}>Min: {minDue}</Text> : null}
          </View>
        )}

        {autopayEnabled ? (
          <View style={styles.autopayPill}>
            <View style={styles.autopayDot} />
            <Text style={styles.autopayText}>Autopay On</Text>
          </View>
        ) : null}

        <View style={styles.actionsRow}>
          {actions.map((action) => (
            <Pressable key={action} style={styles.actionBtn}>
              <Text style={styles.actionText}>{action}</Text>
            </Pressable>
          ))}
        </View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    borderRadius: 24,
    backgroundColor: '#121726',
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.16,
    shadowRadius: 18,
    elevation: 8,
  },
  pressArea: {
    padding: 20,
    gap: 14,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
  },
  maskedNumber: {
    color: '#8C95A8',
    fontSize: 13,
    fontWeight: '500',
  },
  balanceSection: {
    gap: 4,
  },
  balanceValue: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  subtext: {
    color: '#9DA7BD',
    fontSize: 13,
    fontWeight: '600',
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaText: {
    color: '#D0D7E6',
    fontSize: 12,
  },
  autopayPill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(91, 231, 196, 0.14)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  autopayDot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#5BE7C4',
    marginRight: 6,
  },
  autopayText: {
    color: '#5BE7C4',
    fontSize: 12,
    fontWeight: '600',
  },
  actionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  actionBtn: {
    borderRadius: 14,
    backgroundColor: '#20293D',
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  actionText: {
    color: '#F6F8FC',
    fontSize: 13,
    fontWeight: '600',
  },
});

export default ProductCard;
