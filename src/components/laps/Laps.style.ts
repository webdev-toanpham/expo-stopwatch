import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 64,
        paddingVertical: 32,
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12
    },
    firstRow: {
        marginTop: 0
    },
    text: {
        fontSize: 24
    }
});

export default styles;