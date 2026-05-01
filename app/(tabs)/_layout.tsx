import TabIcon from "@/components/TabIcon";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";

const _TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          position: "absolute",
          marginBottom: 36,
          marginHorizontal: 20,
          borderRadius: 50,
          backgroundColor: "#0f0D23",
          height: 50,
          borderWidth: 1,
          borderColor: "#030013",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              bgImage={images.highlight}
              title="Home"
              icon={icons.home}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              bgImage={images.highlight}
              title="Search"
              icon={icons.search}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              bgImage={images.highlight}
              title="Saved"
              icon={icons.save}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              bgImage={images.highlight}
              title="Profile"
              icon={icons.person}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _TabLayout;
