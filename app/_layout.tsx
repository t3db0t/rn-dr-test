import '../global.css';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { router, Slot, Stack, usePathname } from 'expo-router';
import { useEffect } from 'react';
import { Linking } from 'react-native';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

function LayoutWrapper() {
  const pathname = usePathname();
  console.log('LayoutWrapper pathname', pathname);

  useEffect(() => {
    if (pathname === '/') {
      const timeout = setTimeout(() => {
        console.log('Redirecting to /auth/welcome');

        // this does not work
        // router.replace('/auth/welcome');
        router.replace({ pathname: '/auth/[screen]', params: { screen: 'welcome' } });

        // this does work
        // Linking.openURL('exp://localhost:8081/--/auth/welcome');
      }, 100); // small delay to ensure router is ready

      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  return <Slot />;
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LayoutWrapper />
    </GestureHandlerRootView>
  );
}
