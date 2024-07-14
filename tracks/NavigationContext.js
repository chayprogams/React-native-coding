import { createContext, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
export const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
    const navigation = useNavigation();
    return (
        <NavigationContext.Provider value={navigation}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigationContext = () => {
    return useContext(NavigationContext);
};
