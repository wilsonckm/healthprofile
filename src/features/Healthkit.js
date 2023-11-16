import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import AppleHealthKit, {
  HealthKitPermissions,
  HealthValue,
} from "react-native-health";

const permissions = {
    permissions: {
      read: [AppleHealthKit.Constants.Permissions.HeartRate],
      write: [AppleHealthKit.Constants.Permissions.Steps],
    },
  } as HealthKitPermissions

const HealthKitExample = () => {
  useEffect(() => {
    const requestHealthKitPermissions = async () => {
      
      };

      AppleHealthKit.initHealthKit(permissions, (error: string) => {
        if (error) {
          console.log("[ERROR] Cannot grant permissions!");
        } else {
          // Permissions granted, now you can read or write to HealthKit

          const options = {
            startDate: new Date(2020, 1, 1).toISOString(),
          };

          AppleHealthKit.getHeartRateSamples(
            options,
            (callbackError: string, results: HealthValue[]) => {
              if (callbackError) {
                console.error(
                  "[ERROR] Failed to get heart rate samples:",
                  callbackError
                );
              } else {
                /* Samples are now collected from HealthKit */
                console.log("Heart Rate Samples:", results);
              }
            }
          );
        }
      });
    };

    // Call the function to request HealthKit permissions
    requestHealthKitPermissions();
  }, []);

  return (
    <View>
      <Text>Step Count: {stepCount}</Text>
      <Button title="Fetch Step Count" onPress={fetchStepCount} />
    </View>
  );
};

export default HealthKitExample;
