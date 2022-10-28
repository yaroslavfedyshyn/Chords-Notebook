import { ReactElement, PropsWithChildren } from 'react';
import { View } from 'react-native';

import styles from './styles';

export interface ICommonPageLayoutPropTypes
  extends PropsWithChildren<{
    fabNode?: ReactElement;
  }> {}

export default (props: ICommonPageLayoutPropTypes) => {
  const { fabNode, children } = props;

  return (
    <View style={styles.container}>
      {children}
      {fabNode ? (
        <View style={styles.fabButtonContainer}>{fabNode}</View>
      ) : null}
    </View>
  );
};
