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
          backgroundColor: "#0f0D23",
          position: "absolute",
          marginBottom: 20,
          marginHorizontal: 20,
          borderRadius: 50,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              bgImage={images.highlight}
              icon={icons.home}
              title={"Home"}
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
              icon={icons.search}
              title="Search"
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
              icon={icons.save}
              title="Saved"
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
              icon={icons.person}
              title="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _TabLayout;
