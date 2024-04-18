import { MD3LightTheme, Provider } from "react-native-paper";
import AppNavigator from "./src/navigation/AppNavigator";


import { themeLight } from "./src/config/theme";

export default function App() {
 
  const theme = {
    ...MD3LightTheme, // pega o tema padrão do RNP
    colors: themeLight.colors, // sobrescreve as cores do tema
  };

  return (
    <Provider theme={theme}>
      {/* aqui usamos o provider do RNP */}
      <AppNavigator />
    </Provider>
  );
}
