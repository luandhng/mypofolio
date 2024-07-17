import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { supabase } from "./utils/supabase";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import { GeofencingEventType } from "expo-location";

type GeofencingTaskData = {
  eventType: Location.GeofencingEventType;
  region: Location.GeofencingRegionState;
};

type GeofencingTaskError = {
  message: string;
};

export default function App() {
  const [locations, setLocations] = useState<any>();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationRes, setLocationRes] = useState<any>();
  const [lat, setLat] = useState(0);

  
  const YOUR_TASK_NAME = 'GEOFENCING_TASK';

  TaskManager.defineTask(YOUR_TASK_NAME, ({ data, error }: { data: GeofencingTaskData, error: GeofencingTaskError | null }) => {
    if (error) {
      console.error('Geofencing error:', error.message);
      return;
    }
    const { eventType, region } = data;
    if (eventType === GeofencingEventType.Enter) {
      console.log("You've entered region:", region);
    } else if (eventType === GeofencingEventType.Exit) {
      console.log("You've left region:", region);
    }
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let { data: locations } = await supabase.from("locations").select("*");
      setLocations(locations);
    };

    fetchData();
  }, []);


  return (
    <View className="bg-red-600 h-full flex justify-center items-center">
      <Text className="text-xl text-white font-medium">
        You are not in the lump
      </Text>

      <View className="">
        <Text className="text-white">{location?.coords.latitude}</Text>
        <Text className="text-white">{location?.coords.longitude}</Text>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}
