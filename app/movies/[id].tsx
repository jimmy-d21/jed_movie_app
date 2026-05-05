import MovieDetailsModal from "@/components/modal/MovieDetailsModal";
import { icons } from "@/constants/icons";
import { fetchMovieDetailes } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MovieDetailes = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    data: movieData,
    loading: loadingMovie,
    error: errorMovie,
  } = useFetch(() => fetchMovieDetailes(id as string));

  if (loadingMovie) {
    return (
      <View className="flex-1 bg-primary items-center justify-center">
        <ActivityIndicator size="large" color="#ab8bff" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-primary">
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-12 left-5 bg-white rounded-full p-3 z-10"
      >
        <Image source={icons.arrow} className="size-5 rotate-180" />
      </TouchableOpacity>

      {/* Poster Image */}
      <View className="w-full">
        <Image
          source={{
            uri: movieData?.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-[500px]"
          resizeMode="cover"
        />
      </View>

      {/* Title & Year */}
      <View className="px-5 mt-4">
        <Text
          className="text-white text-xl font-semibold mb-2"
          numberOfLines={1}
        >
          {movieData?.title}
        </Text>
        <Text className="text-gray-600 text-md mb-4">
          {movieData?.release_date?.split("-")[0]}
        </Text>
        {/* Open Modal Button */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="bg-accent rounded-xl py-4 flex-row items-center justify-center gap-2"
        >
          <Text className="text-white text-base font-semibold">
            View Movie Details
          </Text>
          <Image source={icons.arrow} className="size-5" />
        </TouchableOpacity>
      </View>

      <MovieDetailsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        movieData={movieData}
      />
    </View>
  );
};

export default MovieDetailes;
