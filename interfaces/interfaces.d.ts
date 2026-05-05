import { ImageSourcePropType } from "react-native";

interface TabIconProps {
  bgImage: ImageSourcePropType;
  title: string;
  icon: ImageSourcePropType;
  focused: boolean;
}

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  popularity: number;
}

interface SearchBarProps {
  onPress?: () => void;
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder?: string;
}

interface MovieDetails {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  } | null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieInfoProps {
  label: string;
  value?: string | number | null;
}
interface MovieDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  movieData: any;
}
