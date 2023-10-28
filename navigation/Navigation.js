// In App.js in a new project
import * as React from "react";
// import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ScreenHome from "../screens/ScreenHome";
import ScreenInicio from "../screens/ScreenInicio";
import ScreenLegislacao from "../screens/ScreenLegislacao";
import ScreenLeiExercicoProfissional from "../screens/ScreenLeiExercicoProfissional";
import ScreenNormasRotinas from "../screens/ScreenNormasRotinas";
import ScreenProtocolosSaude from "../screens/ScreenProtocolosSaude";
import ScreenNivelAutonomia from "../screens/ScreenNivelAutonomia";
import ScreenFaleDSD from "../screens/ScreenFaleDSD";
import ScreenRegimentoEnfermagem from "../screens/ScreenRegimentoEnfermagemInf";
import ScreenPOPEnfermagem from "../screens/ScreenPOPEnfermagem";
import ScreenGuiaAtencaoPrimariaSaude from "../screens/ScreenGuiaAtencaoPrimariaSaude";
import ScreenTuberculose from "../screens/ScreenTuberculose";
import ScreenISTHIVAids from "../screens/ScreenISTHIVAids";
import ScreenEscabiose from "../screens/ScreenEscabiose";

// import ScreenWebView from '../screens/ScreenWebView';
// import Tabs from './Tabs';
// import Screen7_1 from '../screens/Screen7_1';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ScreenHome}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Inicio"
          component={ScreenInicio}
          options={{ title: "Inicio" }}
        />
        <Stack.Screen
          name="Legislacao"
          component={ScreenLegislacao}
          options={{ title: "Legislação" }}
        />
        <Stack.Screen
          name="NormasRotinas"
          component={ScreenNormasRotinas}
          options={{ title: "Normas e Rotinas" }}
        />
        <Stack.Screen
          name="ProtocolosSaude"
          component={ScreenProtocolosSaude}
          options={{ title: "Protocolos de Saúde" }}
        />
        <Stack.Screen
          name="NivelAutonomia"
          component={ScreenNivelAutonomia}
          options={{ title: "Nível de Autonomia" }}
        />
        <Stack.Screen
          name="FaleDSD"
          component={ScreenFaleDSD}
          options={{ title: "Fale com a DSP" }}
        />

        <Stack.Screen
          name="LeiExercicoProfissional"
          component={ScreenLeiExercicoProfissional}
          options={{ title: "Lei do Exercico Profissional" }}
        />

        <Stack.Screen
          name="RegimentoEnfermagem"
          component={ScreenRegimentoEnfermagem}
          options={{ title: "Regimento de Enfermagem" }}
        />

        <Stack.Screen
          name="POPEnfermagem"
          component={ScreenPOPEnfermagem}
          options={{ title: "Legislação" }}
        />
        <Stack.Screen
          name="GuiaAtencaoPrimariaSaude"
          component={ScreenGuiaAtencaoPrimariaSaude}
          options={{ title: "Legislação" }}
        />
        <Stack.Screen name="Tuberculose" component={ScreenTuberculose} />

        <Stack.Screen name="ISTHIVAids" component={ScreenISTHIVAids} />

        <Stack.Screen name="Escabiose" component={ScreenEscabiose} />
        {/* <Stack.Screen name="WebView" component={ScreenWebView} /> */}

        {/* <Stack.Screen name="" component={Tabs} />
        <Stack.Screen name="7_1" component={Screen7_1} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
