import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

const BitcoinCard = ({ exchange }) => {
    return <View
        style={styles.container}
    >
        <Text style={styles.exchangeName}>
            {exchange.name}
        </Text>
        <View
            style={styles.containerInfo}
        >
            <View
                style={styles.priceContainer}
            >
                <Text style={styles.priceLabel}>Preço</Text>
                <Text style={styles.price}>{
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(exchange.price)
                }</Text>

            </View>
            <View
                style={styles.dateContainer}
            >
                <Text style={styles.dateLabel}>Data</Text>
                <Text style={styles.date}>{
                    format(parseISO(exchange.date), "dd/MM/YYY', às' H:mm'h' ", { locale: pt })
                }</Text>
            </View>

        </View>

    </View>
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        borderRadius: 5,
        backgroundColor: '#ffc200',
        padding: 20,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
    exchangeName: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#000',
        textTransform: "uppercase"
    },
    containerInfo: {
        alignSelf: "stretch",
        marginTop:5
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"baseline"
    },
    priceLabel: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#000'
    },
    price: {},
    dateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"baseline"
    },
    dateLabel: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#000'
    },
    date: {},
})

export default BitcoinCard;