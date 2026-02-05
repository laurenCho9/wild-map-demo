import { useInitialLocation } from "@/hooks/useInitialLocation";
import { View } from "react-native";
import GoogleMapView from "./(tabs)/map/_components/GoogleMapView";

export default function Home() {
  const coords = useInitialLocation();

  return (
    <View style={{ flex: 1 }}>
      <GoogleMapView coords={coords} />
    </View>
  );
}
