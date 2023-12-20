// MyNativeModule.js
import { NativeModules } from 'react-native';

const NativeModuleTest = () => {
    const ImportedNativeModule = NativeModules;
  const MyNativeModule = NativeModules.MyNativeModule;

  console.log('ImportedNativeModule', ImportedNativeModule);

  console.log('MyNativeModule', MyNativeModule);

    return MyNativeModule;
};


export default NativeModuleTest;
