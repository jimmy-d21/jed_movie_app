import { MovieInfoProps } from "@/interfaces/interfaces";
import React from "react";
import { Text, View } from "react-native";

const MovieInfo = ({ label, value }: MovieInfoProps) => {
  return (
    <View className="flex-col items-start justify-center mt-5 gap-y-2">
      <Text className="text-md text-ligth-200 font-normal">{label}</Text>
      <Text className="text-md text-accent font-normal">{value}</Text>
    </View>
  );
};

export default MovieInfo;
