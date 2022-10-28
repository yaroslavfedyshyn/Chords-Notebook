import HomeScreen from 'screens/HomeScreen';
import SongFormScreen from 'screens/SongFormScreen';

import { TRouteParams } from 'types';

import { HOME_PAGE_ROUTE, SONG_FORM_ROUTE } from './routes';

const hideHeader = () => null;

const router: Array<TRouteParams> = [
  {
    name: HOME_PAGE_ROUTE,
    component: HomeScreen,
    options: {
      header: hideHeader,
    },
  },
  {
    name: SONG_FORM_ROUTE,
    component: SongFormScreen,
  },
];

export default router;
