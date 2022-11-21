import { Button } from 'react-native';

export interface ISaveButtonPropTypes {
  onPress: () => void;
}

export default (props: ISaveButtonPropTypes) => {
  const { onPress } = props;

  return <Button title="Save" onPress={onPress} />;
};
