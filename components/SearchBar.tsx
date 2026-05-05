import { icons } from "@/constants/icons";
import { SearchBarProps } from "@/interfaces/interfaces";
import React from "react";
import { Image, TextInput, View } from "react-native";

const SearchBar = ({
  onPress,
  placeholder,
  onChangeText,
  value,
}: SearchBarProps) => {
  return (
    <View className="flex-row items-center justify-center gap-3 px-10 py-2 mb-10 rounded-full bg-dark-200">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#ab8bff"}
      />
      <TextInput
        placeholder={placeholder}
        className="w-full text-white"
        onPress={onPress}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor="#ab8bff"
      />
    </View>
  );
};

export default SearchBar;
