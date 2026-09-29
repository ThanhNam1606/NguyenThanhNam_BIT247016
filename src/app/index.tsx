import { useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";

export default function Screen1() {
  const [userName, setUserName] = useState("");
  const [mssv, setMssv] = useState("");

  const handleClick = () => {
    if (userName.trim() === "") {
      Alert.alert("Thông báo", "Vui lòng nhập UserName");
      return;
    }

    if (mssv.trim() === "") {
      Alert.alert("Thông báo", "Vui lòng nhập MSSV");
      return;
    }

    router.push({
      pathname: "/Screen",
      params: {
        userName: userName,
        mssv: mssv,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.whiteNumber}>1</Text>
      </View>

      <View style={styles.box2}>
        <Text style={styles.whiteNumber}>2</Text>
      </View>

      <View style={styles.row345}>
        <View style={styles.box3}>
          <Text style={styles.blackNumber}>3</Text>
        </View>

        <View style={styles.box4}>
          <Text style={styles.whiteNumber}>4</Text>
        </View>

        <View style={styles.box5}>
          <Text style={styles.whiteNumber}>5</Text>
        </View>
      </View>

      <View style={styles.box6}>
        <Text style={styles.whiteNumber}>6</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="UserName"
        value={userName}
        onChangeText={setUserName}
      />

      <TextInput
        style={styles.input}
        placeholder="MSSV"
        value={mssv}
        onChangeText={setMssv}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        {userName || "Họ và tên"} - {mssv || "MSSV"}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
  },

  box1: {
    height: 78,
    backgroundColor: "#2F80ED",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  box2: {
    height: 78,
    backgroundColor: "#FF3B3F",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  row345: {
    height: 160,
    flexDirection: "row",
    marginBottom: 6,
  },

  box3: {
    width: "25%",
    backgroundColor: "#FFD21F",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },

  box4: {
    width: "25%",
    backgroundColor: "#2FB36C",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },

  box5: {
    width: "25%",
    backgroundColor: "#7D3FE0",
    justifyContent: "center",
    alignItems: "center",
  },

  box6: {
    height: 133,
    backgroundColor: "#FF7411",
    justifyContent: "center",
    alignItems: "center",
  },

  whiteNumber: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },

  blackNumber: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: "black",
    width: 130,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    fontSize: 14,
    color: "#333",
    marginTop: "auto",
    marginBottom: 10,
  },
});
