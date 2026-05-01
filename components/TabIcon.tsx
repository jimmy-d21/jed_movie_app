import { TabIconProps } from "@/interfaces/interfaces";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({ bgImage, title, icon, focused }: TabIconProps) => {
  return focused ? (
    <ImageBackground
      source={bgImage}
      className="flex flex-row w-full flex-1 min-w-[110px] gap-2 min-h-15 mt-4 justify-center items-center rounded-full overflow-hidden"
    >
      <Image source={icon} className="size-5" tintColor={"#151312"} />
      <Text className="text-secondary font-semibold text-base">{title}</Text>
    </ImageBackground>
  ) : (
    <View className="w-full justify-center items-center mt-4">
      <Image source={icon} className="size-5" tintColor={"#a8b5db"} />
    </View>
  );
};

export default TabIcon;
