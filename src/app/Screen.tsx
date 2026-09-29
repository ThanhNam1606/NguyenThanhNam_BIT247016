
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router, useLocalSearchParams } from "expo-router";

export default function Screen2() {
  const { userName, mssv } = useLocalSearchParams<{
    userName: string;
    mssv: string;
  }>();

  return (
    <SafeAreaView style={styles.container}>
      {/* BUTTON QUAY LẠI */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* NỘI DUNG SCREEN 2 */}
      <View style={styles.content}>
        <Text style={styles.title}>Screen 2</Text>

        <Text style={styles.label}>UserName</Text>

        <Text style={styles.value}>{userName}</Text>

        <Text style={styles.label}>MSSV</Text>

        <Text style={styles.value}>{mssv}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  backButton: {
    position: "absolute",
    top: 15,
    left: 15,
    width: 50,
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    zIndex: 10,
  },

  backText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },

  value: {
    fontSize: 20,
    color: "#2F80ED",
    marginTop: 5,
  },
});
