import Laps from '@/components/laps/Laps';
import Watch from '@/components/watch/Watch';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
    const [results, setResults] = useState<number[]>([]);

    return (
        <View style={styles.container}>
            <Watch setResults={setResults} />
            <Laps results={results} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
