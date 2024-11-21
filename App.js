import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexBoxLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>ZENLESS ZONE ZERO</Text>
      <View style={styles.flexRow}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Menyusun elemen secara vertikal di tengah
    alignItems: 'center', // Menyusun elemen secara horizontal di tengah
    backgroundColor: '#d3d3d3', // Warna abu-abu terang
  },
  centerText: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna teks biru
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 20, // Memberikan jarak antara teks dan kotak
  },
  flexRow: {
    flexDirection: 'row', // Mengatur kotak secara horizontal
    justifyContent: 'space-between', // Memberikan jarak merata antar kotak
    width: '100%', // Membuat area selebar layar
    paddingHorizontal: 20, // Menambahkan padding pada sisi kiri dan kanan
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'white', // Warna bebas, di sini merah
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'orange', // Warna bebas, di sini hijau
  },
});

export default FlexBoxLayout;
