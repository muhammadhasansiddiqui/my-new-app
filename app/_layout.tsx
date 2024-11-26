import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="tabs/explore" options={{ title: 'Explore' }} />
      <Tabs.Screen name="tabs/cart" options={{ title: 'Cart' }} />
      <Tabs.Screen name="tabs/profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
