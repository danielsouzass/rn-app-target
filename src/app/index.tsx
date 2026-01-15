import { Text, View, Button } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Expo Router</Text>

      <Button title="Nova Meta" onPress={() => router.navigate("/target")} />
      <Button
        title="Transação"
        onPress={() => router.navigate("/transaction/1")}
      />
      <Button
        title="Progresso"
        onPress={() => router.navigate("/in-progress/2")}
      />
    </View>
  );
}
