import { useCallback } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export interface IFormBottomActionsPropTypes {}

export default (props: IFormBottomActionsPropTypes) => {
  const onChangeSongKey = useCallback(() => {}, []);
  const onChangeFontSize = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <Icon.Button
        onPress={onChangeSongKey}
        name="facebook"
        iconStyle={styles.iconBase}
      />
      <Icon.Button
        onPress={onChangeFontSize}
        name="plus"
        iconStyle={styles.iconBase}
      />
    </View>
  );
};
