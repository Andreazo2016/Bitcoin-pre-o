import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, RefreshControl } from 'react-native';

import BitcoinCard from '../../components/BitcoinCard';
import LoadingBitcoin from '../../components/LoadingBitcoin';

import { loadBitcoinValue } from '../../services/apiBitcoin';


const Home = () => {

    const [exchanges, setExchanges] = useState([])
    const [loading, setLoading] = useState(false)

    const [loadingBitcoinInfo, setLoadingBitcoinIfo] = useState(true)

    useEffect(() => {
        async function load() {
            const data = await loadBitcoinValue()
            setExchanges(data)
        }
        load()
    }, [])

    function stopAnimation() {
        setLoadingBitcoinIfo(false)
    }
    async function onRefresh() {
        setLoading(true)
        const data = await loadBitcoinValue()
        setExchanges(data)
        setLoading(false)
    }

    return (
        <>
            <View
                style={styles.header}
            >
                <Text style={styles.headerText}>Preço do Bitcoin</Text>
            </View>

            {
                loadingBitcoinInfo ? <LoadingBitcoin stopAnimation={stopAnimation} /> :

                    <View
                        style={styles.container}
                    >
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    colors={['#ffc200']}
                                    refreshing={loading}
                                    onRefresh={onRefresh}
                                />
                            }
                            data={exchanges}
                            keyExtractor={exchange => exchange.name}
                            renderItem={({ item }) => <BitcoinCard exchange={item} />}
                        />
                    </View>
            }

        </>
    )
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffc200',
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    }
})


export default Home;