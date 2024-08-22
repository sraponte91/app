import {View, Text, StyleSheet, ScrollView} from "react-native";
import BrandLogo from "../../assets/logo-price.svg";
import React, { useState } from 'react';

const dataCards  = [
    {
        logo: '',
        title: 'S&P 500',
        subTitle: "Standard & Poor's",
        value: '$5,426.36',
        percentage: '+1.5%'
    },
    {
        logo: '',
        title: 'S&P 600',
        subTitle: "Standard & Poor's",
        value: '$5,426.36',
        percentage: '+1.5%'
    },
    {
        logo: '',
        title: 'S&P 700',
        subTitle: "Standard & Poor's",
        value: '$5,426.36',
        percentage: '+1.5%'
    },
];

export default function Card(){
    return (
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollCards}>
            {dataCards.map((dataCard) => { return(
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <BrandLogo />
                        <View style={styles.titleContainer}>
                            <Text style={styles.cardTitle}>
                                {dataCard.title}
                            </Text>
                            <Text style={styles.cardSubtitle}>
                                Standard & Poor’s
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.cardValue}>
                            $5,426.36
                        </Text>
                        <Text style={styles.cardPercentage}>
                            +1.5%
                        </Text>
                    </View>
                </View>
            );
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: '#FFFFFF',
        width: 240,
        height: 136,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        padding: 16,
        justifyContent: 'space-between',
    },
    cardHeader: {
        flexDirection: 'row',
        gap: 8,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0D0D12',
    },
    cardSubtitle: {
        fontSize: 14,
        fontWeight: 'light',
        color: '#666D80',
    },
    cardValue: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardPercentage: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#16A34A',
    },
    scrollCards: {
        gap: 16,
        paddingLeft: 24,
    }
})