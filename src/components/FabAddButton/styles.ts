import { StyleSheet } from 'react-native';

import themes from "../../themes";

export default StyleSheet.create({
    button: {
        backgroundColor: themes.colors.main,
        height: 50,
        width: 50,
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        marginRight: 'none',
    }
});
