import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    timer: {
        width: '100%',
        minHeight: width,
        height: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 40
    },
    action: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 40,
        paddingRight: 40
    },
    btn: {
        width: 84,
        height: 84,
        borderRadius: 42,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnReset: {
        backgroundColor: '#bdbdbd',
    },
    btnLap: {
        backgroundColor: 'orange'
    },
    btnStart: {
        backgroundColor: 'green',
    },
    btnResume: {
        backgroundColor: '#006695'
    },
    btnStop: {
        backgroundColor: 'red',
    },
    btnText: {
        fontSize: 20,
        width: 80,
        height: 80,
        borderRadius: 40,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#fff',
        textAlign: 'center',
        lineHeight: 80,
        color: 'white'
    },
});

export default styles;