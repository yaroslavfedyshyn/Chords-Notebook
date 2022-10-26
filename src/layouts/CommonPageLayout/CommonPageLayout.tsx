import { ReactElement } from 'react';
import { View } from 'react-native';

import styles from './styles';

export interface ICommonPageLayoutPropTypes {
  fabNode?: ReactElement;
}

export default (props: ICommonPageLayoutPropTypes) => {
  const { fabNode } = props;

  return (
    <View>
      {fabNode ? (
        <View style={styles.fabButtonContainer}>{fabNode}</View>
      ) : null}
    </View>
  );
};
