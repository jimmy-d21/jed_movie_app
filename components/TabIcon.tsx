import { TabIconProps } from "@/interfaces/interfaces";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({ bgImage, title, icon, focused }: TabIconProps) => {
  return focused ? (
    <ImageBackground
      source={bgImage}
      className="flex flex-row gap-2 w-full flex-1 min-w-[110px] min-h-15 mt-4 justify-center items-center rounded-full overflow-hidden"
    >
      <Image source={icon} className="size-5" tintColor={"#151312"} />
      <Text className="text-secondary text-base font-semibold">{title}</Text>
    </ImageBackground>
  ) : (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} className="size-5" tintColor={"#A8B5DB"} />
    </View>
  );
};

export default TabIcon;
