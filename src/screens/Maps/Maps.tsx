import {StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {useGeolocation} from '../../hooks/useGeolocation';
import {IMapProps} from './Interface';
import Button from '../../components/common/Button';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export const Maps = (_props: IMapProps) => {
  const {state, getCurrentLocation} = useGeolocation();
  return (
    <View style={styles.container} className="z-50">
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        className="relative z-10"
        region={{
          latitude: state.lat,
          longitude: state.lon,
          latitudeDelta: 0.0015,
          longitudeDelta: 0.0021,
        }}>
        <Marker
          key={1}
          coordinate={{latitude: state.lat, longitude: state.lon}}
          title={'Here!'}
          description={'Youre Here!!!'}
        />
      </MapView>
      <View style={StyleSheet.absoluteFill} className="z-20 bg-transparent">
        <Button
          onPress={getCurrentLocation}
          buttonClassName="h-16 w-16 rounded-full bg-black absolute right-5 top-5"></Button>
      </View>
    </View>
  );
};
