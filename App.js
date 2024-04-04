import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet from './BottomSheet';
import { useState } from 'react';

export default function App() {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
};
  return (
    <View style={styles.container}>
      <BottomSheet isVisible={isBottomSheetVisible} onClose={toggleBottomSheet}  />
      <TouchableOpacity onPress={toggleBottomSheet}>
        <Text>Show Bottom Sheet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
