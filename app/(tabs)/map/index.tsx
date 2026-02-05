import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function MapScreen() {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.5665,
        longitude: 126.978,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    />
  );
}
