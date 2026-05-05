import MovieInfo from "@/components/MovieInfo";
import { icons } from "@/constants/icons";
import { MovieDetailsModalProps } from "@/interfaces/interfaces";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MovieDetailsModal = ({
  visible,
  onClose,
  movieData,
}: MovieDetailsModalProps) => {
  const router = useRouter();
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end bg-black/60">
        <View className="bg-primary rounded-t-3xl px-5 pt-5 pb-10 max-h-[80%]">
          {/* Modal Header */}
          <View className="flex-row items-center justify-between mb-5">
            <Text
              className="text-white text-xl font-bold flex-1 mr-3"
              numberOfLines={1}
            >
              {movieData?.title}
            </Text>
            <TouchableOpacity
              onPress={onClose}
              className="bg-dark-200 rounded-full p-2"
            >
              <Text className="text-white text-xs font-bold px-1">✕</Text>
            </TouchableOpacity>
          </View>

          {/* Rating Row */}
          <View className="flex-row items-center gap-3 py-3 px-5 rounded-md bg-dark-200 mb-4">
            <Image source={icons.star} className="size-5" />
            <Text className="text-white font-semibold">
              {movieData?.vote_average?.toFixed(1)}
              <Text className="text-gray-500">
                /10 ({movieData?.vote_count}
                {movieData?.vote_count && movieData.vote_count > 1000
                  ? "K"
                  : ""}
                )
              </Text>
            </Text>
          </View>

          {/* Scrollable Content */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <MovieInfo label="Overview" value={movieData?.overview} />

            <MovieInfo
              label="Genres"
              value={
                movieData?.genres?.map((g: any) => g.name).join(" • ") || "N/A"
              }
            />

            <MovieInfo
              label="Countries"
              value={
                movieData?.production_countries
                  ?.map((c: any) => c.name)
                  .join(" • ") || "N/A"
              }
            />

            <View className="w-full flex-row items-center gap-10">
              <MovieInfo
                label="Budget"
                value={
                  movieData?.budget
                    ? `$${(movieData.budget / 1_000_000).toFixed(1)} million`
                    : "N/A"
                }
              />
              <MovieInfo
                label="Revenue"
                value={
                  movieData?.revenue
                    ? `$${(movieData.revenue / 1_000_000).toFixed(0)} Million`
                    : "N/A"
                }
              />
            </View>

            <MovieInfo label="Tagline" value={movieData?.tagline} />

            <MovieInfo
              label="Production Companies"
              value={
                movieData?.production_companies
                  ?.map((pc: any) => pc.name)
                  .join(" • ") || "N/A"
              }
            />

            {/* Visit Homepage Button */}
            <TouchableOpacity
              onPress={() => router.back()}
              className="bg-accent rounded-xl py-4 flex-row items-center justify-center mt-5 gap-2"
            >
              <Text className="text-white text-base font-semibold">
                Visit Homepage
              </Text>
              <Image source={icons.arrow} className="size-5" />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default MovieDetailsModal;
