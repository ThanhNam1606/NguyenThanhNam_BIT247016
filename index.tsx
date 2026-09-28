import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {}
      <View style={[styles.box, styles.box1]}>
        <Text style={styles.text}>1</Text>
      </View>

      {}
      <View style={[styles.box, styles.box2]}>
        <Text style={styles.text}>2</Text>
      </View>

      {}
      <View style={styles.row}>
        <View style={[styles.box, styles.box3]}>
          <Text style={styles.text}>3</Text>
        </View>

        <View style={[styles.box, styles.box4]}>
          <Text style={styles.text}>4</Text>
        </View>

        <View style={[styles.box, styles.box5]}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>

      {}
      <View style={[styles.box, styles.box6]}>
        <Text style={styles.text}>6</Text>
      </View>

      {}
      <View style={styles.footer}>
        <Text style={styles.footerText}>BIT247016-Nguyễn Thành Nam</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 8,
    paddingHorizontal: 5,
  },

  box: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#fff",
  },

  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },

  box1: {
    height: 80,
    backgroundColor: "#2F80ED",
    marginBottom: 4,
  },

  box2: {
    height: 80,
    backgroundColor: "#FF3B3B",
    marginBottom: 4,
  },

  row: {
    flexDirection: "row",
    height: 165,
    marginBottom: 4,
  },

  box3: {
    flex: 1,
    backgroundColor: "#FFD21C",
    marginRight: 4,
  },

  box4: {
    flex: 1,
    backgroundColor: "#2DB36B",
    marginRight: 4,
  },

  box5: {
    flex: 1,
    backgroundColor: "#7B3FE4",
  },

  box6: {
    height: 135,
    backgroundColor: "#FF7614",
  },

  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },

  footerText: {
    fontSize: 16,
    color: "#333",
  },
});
