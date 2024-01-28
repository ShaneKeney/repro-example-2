import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Skeleton } from 'moti/skeleton';
import { cssInterop } from 'nativewind';

// Attepmpt #1
// cssInterop(Skeleton, {
//   heightClassName: {
//     target: false, // don't pass this as a prop
//     nativeStyleToProp: {
//       height: 'height' // extract `height` from heightClassName and pass it to the `height` prop
//     }
//   }
// });

// Attepmpt #2
// cssInterop(Skeleton, {
//   heightClassName: {
//     target: 'height', // don't pass this as a prop
//     nativeStyleToProp: {
//       height: true // extract `height` from heightClassName and pass it to the `height` prop
//     }
//   }
// });

export default function RootEntry() {
  const { top } = useSafeAreaInsets();

  return (
    <View className="flex-1 gap-4 p-4" style={{ marginTop: top }}>
      <Skeleton show radius={9} colorMode="light" height={125} width={'100%'}></Skeleton>

      <Skeleton
        show
        radius={9}
        colorMode="light"
        // TS error here regardless of `cssInterop` above.  Based on docs would expect this to work unless I am misunderstanding the docs.
        heightClassName={'h-[125px]'}
        width={'100%'}
      ></Skeleton>
    </View>
  );
}
