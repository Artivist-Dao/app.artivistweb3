import Routes from "./src/routes";
import { StatusBar, SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView className="bg-branco h-full">
        <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
        <Routes />
      </SafeAreaView>
    </>
  );
}