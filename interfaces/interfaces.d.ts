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
