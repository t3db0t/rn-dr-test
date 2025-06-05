import { Text, View } from 'react-native';
import { useGlobalSearchParams, useLocalSearchParams, usePathname, useSegments } from 'expo-router';

export default function AuthMasterView() {
  const localParams = useLocalSearchParams();
  const pathname = usePathname();

  console.log('=== AUTH DEBUG ===');
  console.log('localParams:', localParams);
  console.log('pathname:', pathname);
  console.log('==================');

  //   const { screen: screenFromParams, email, token } = localParams;
  const screen = localParams?.screen;

  console.log('Screen:', screen);

  return (
    <View className="h-full items-center justify-center">
      <Text>Got screen param: {screen}</Text>
    </View>
  );
}
