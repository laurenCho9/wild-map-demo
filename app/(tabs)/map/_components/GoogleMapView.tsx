import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

type Props = {
  coords: { latitude: number; longitude: number } | null;
};

export default function GoogleMapView({ coords }: Props) {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      initialRegion={{
        latitude: coords?.latitude ?? 37.5665,
        longitude: coords?.longitude ?? 126.978,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {coords && (
        <Marker
          coordinate={{
            latitude: coords.latitude,
            longitude: coords.longitude,
          }}
        />
      )}
    </MapView>
  );
}
