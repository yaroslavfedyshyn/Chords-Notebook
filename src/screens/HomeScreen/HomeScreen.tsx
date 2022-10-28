import { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CommonPageLayout from 'layouts/CommonPageLayout';

import FabAddButton from 'components/FabAddButton';

import { TAllStackProps } from 'navigation/stacks/main/types';
import { SONG_FORM_ROUTE } from 'navigation/stacks/main/routes';

import styles from './styles';

export interface IHomeScreenPropTypes
  extends NativeStackScreenProps<TAllStackProps> {}

export default (props: IHomeScreenPropTypes) => {
  const { navigation } = props;

  const onAddPress = useCallback(() => {
    navigation.push(SONG_FORM_ROUTE);
  }, [navigation]);

  const fabButtonNode = useMemo(() => {
    return <FabAddButton onPress={onAddPress} />;
  }, [onAddPress]);

  return (
    <CommonPageLayout fabNode={fabButtonNode}>
      <View style={styles.container} />
    </CommonPageLayout>
  );
};
