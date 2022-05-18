import {TypeRootStackParamList} from "./src/navigation/types";

declare global {
  namespace ReactNavigation {
    interfase RootParamList extends TypeRootStackParamList{}
  }
}
