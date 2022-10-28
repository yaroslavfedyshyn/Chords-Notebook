import { FunctionComponent } from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export type TRouteParams = {
  name: string;
  component: FunctionComponent<any>;
  options?: NativeStackNavigationOptions;
};
