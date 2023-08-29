import { ScrollView, Text, View } from "react-native";
import styles from "./Laps.style";
import { formatTimer } from "@/utils/utils";

type LapsProps = {
    results: number[]
}

export default function Laps({ results }: LapsProps) {
    return (
        <ScrollView style={styles.container}>
            {results.map((result, i) => (
                <View key={i} style={[styles.row, i === 0 && styles.firstRow]}>
                    <View>
                        <Text style={styles.text}>Lap {results.length - i}</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>{formatTimer(result)}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}