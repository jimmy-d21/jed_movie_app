import { icons } from "@/constants/icons";
import { Movie } from "@/interfaces/interfaces";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({ id, poster_path, title, vote_average }: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="flex-1">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg mb-2"
          resizeMode="cover"
        />
        <Text
          numberOfLines={1}
          className="text-white text-sm font-semibold mb-1"
        >
          {title}
        </Text>
        <View className="flex-row items-center gap-1">
          <Image source={icons.star} className="size-4.5" />
          <Text className="text-white text-sm font-semibold">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
