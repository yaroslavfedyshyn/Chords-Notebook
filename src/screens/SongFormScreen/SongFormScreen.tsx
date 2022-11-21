import React, { useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { TAllStackProps } from 'navigation/stacks/main/types';

import SaveButton from './components/SaveButton';
import FormBottomActions from './components/FormBottomActions';
import styles from './styles';

export interface ISongFormScreenPropTypes
  extends NativeStackScreenProps<TAllStackProps> {}

export default (props: ISongFormScreenPropTypes) => {
  const { navigation } = props;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Add New Song',
      headerRight: SaveButton as () => React.ReactElement,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <TextInput multiline autoFocus style={styles.textArea} />
      <FormBottomActions />
    </View>
  );
};
