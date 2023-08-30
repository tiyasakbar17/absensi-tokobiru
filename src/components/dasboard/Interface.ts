import RBSheet from 'react-native-raw-bottom-sheet';
import {ILocation} from '../../hooks/useGeolocation';

export type BottomSheetProps = {
  rbSheetRef: React.RefObject<RBSheet>;
};

export interface IFormData {
  coord: ILocation;
  details: string;
}
