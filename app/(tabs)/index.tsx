import MovieCard from "@/components/MovieCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();
  const {
    data: movies,
    loading: loadingMovies,
    trendingMovies,
    fetchPopularMovies,
  } = useFetch(() => fetchMovies({ query: "" }));

  useEffect(() => {
    fetchPopularMovies();
  }, [fetchPopularMovies]);

  if (loadingMovies) {
    return (
      <View className="flex-1 bg-primary items-center justify-center">
        <ActivityIndicator size={"large"} className="text-accent" />
      </View>
    );
  }

  const renderHeader = () => {
    return (
      <View className="px-5">
        <Image source={icons.logo} className="w-12 h-10 mx-auto mt-20 mb-10" />
        <Text className="text-white font-bold text-xl mb-5">
          Popular Movies
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trendingMovies as any[]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="w-30 mr-4">
              <MovieCard {...item} />
            </View>
          )}
        />
        <Text className="text-white font-bold text-xl mt-15 mb-5">
          Latest Movies
        </Text>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute z-10 w-full" />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        ListHeaderComponent={renderHeader}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 12,
          paddingHorizontal: 20,
          marginBottom: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
