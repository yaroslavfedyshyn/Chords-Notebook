import Icon from 'react-native-vector-icons/FontAwesome';

import themes from 'themes';

import styles from './styles';

export interface IFabAddButtonPropTypes {
  onPress: () => void;
}

export default function FabAddButton(props: IFabAddButtonPropTypes) {
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
}
