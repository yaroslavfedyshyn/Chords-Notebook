import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import themes from "../../themes";

export interface IFabAddButtonPropTypes {
    onPress: () => void;
}

export default (props: IFabAddButtonPropTypes) => {
    const { onPress } = props;

    return (
        <Icon.Button
            name="plus"
            onPress={onPress}
            style={styles.button}
            iconStyle={styles.icon}
            backgroundColor={themes.colors.white}
        />
    );
};
