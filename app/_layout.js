import {ThemeManager} from 'react-native-ui-lib';

import { Slot, Stack } from 'expo-router';


export default function Layout() {
  ThemeManager.setComponentTheme('Text', (props, context) => {
    return {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold'
    };
  });

  ThemeManager.setComponentTheme('View', (props, context) => {
    return {
      backgroundColor: 'white'
    };
  });

  ThemeManager.setComponentTheme('Button', (props) => {
    if(props.shape === 'round')
    {
      return {
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 100,
        
      };
    }
    return {
      backgroundColor: 'black',
      color: 'white',
      borderRadius: 0
    };
  });

  ThemeManager.setComponentTheme('TextField', (props, context) => {
    return {
      floatingPlaceholderColor: 'black',
      placeholderTextColor: 'black',
      underlineColor: 'black',
      floatingPlaceholder: false,
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold'
    };
  }
  );

  ThemeManager.setComponentTheme('SafeAreaView', (props, context) => {
    return {
      backgroundColor: 'white'
    };
  }
  );

  ThemeManager.setComponentTheme('Pressable', (props, context) => {
    return {
      backgroundColor: 'black',
      color: 'white',
      borderRadius: 0
    };
  }
  );

  ThemeManager.setComponentTheme('Image', (props, context) => {
    return {
      backgroundColor: 'white'
    };
  }
  );

  ThemeManager.setComponentTheme('ScrollView', (props, context) => {
    return {
      backgroundColor: 'white'
    };
  }
  );

  ThemeManager.setComponentTheme('TouchableOpacity', (props, context) => {
    return {
      backgroundColor: 'black',
      color: 'white',
      borderRadius: 0
    };
  }
  );


  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="home" options={{headerShown: false}} />
    </Stack>
  
  );
}
