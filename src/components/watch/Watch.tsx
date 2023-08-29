import { useRef, useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import styles from "./Watch.styles";
import { formatTimer } from "@/utils/utils";

type WatchProps = {
    setResults: React.Dispatch<React.SetStateAction<number[]>>
}

export default function Watch({ setResults }: WatchProps) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState((false));

    const timer = useRef<any>(null);

    const onResetOrLapPressHandler = () => {
        if (!isRunning) {
            setResults([]);
            setTime(0);
        } else {
            setResults((prev) => [time, ...prev]);
        }
    }

    const onStartOrStopPressHandler = () => {
        if (!isRunning) {
            const interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 10);
            timer.current = interval;
        } else {
            clearInterval(timer.current);
        }
        setIsRunning((prev) => !prev);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.timer}>
                <Text style={styles.text}>{formatTimer(time)}</Text>
            </View>
            <View style={styles.action}>
                <Pressable style={[styles.btn, isRunning ? styles.btnLap : styles.btnReset]} onPress={onResetOrLapPressHandler}>
                    <Text style={styles.btnText}>{isRunning ? 'Lap' : 'Reset'}</Text>
                </Pressable>
                <Pressable style={[styles.btn, isRunning ? styles.btnStop : time ? styles.btnResume : styles.btnStart]} onPress={onStartOrStopPressHandler}>
                    <Text style={styles.btnText}>{isRunning ? 'Stop' : time ? 'Resume' : 'Start'}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}