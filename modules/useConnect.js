import { useState } from "react";
import RNSimpleOpenvpn, { addVpnStateListener, removeVpnStateListener } from 'react-native-simple-openvpn';


const useConnect = () => {
    async function startOvpn() {
        try {
          await RNSimpleOpenvpn.connect({
            remoteAddress: '192.168.1.1 3000',
            ovpnFileName: 'client',
            assetsPath: 'ovpn/',
            providerBundleIdentifier: 'com.example.RNSimpleOvpnTest.NEOpenVPN',
            localizedDescription: 'RNSimpleOvpn',
          });
        } catch (error) {
          console.log(error);
        }
      }
    
      async function stopOvpn() {
        try {
          await RNSimpleOpenvpn.disconnect();
        } catch (error) {
          console.log(error);
        }
      }

    return { startOvpn, stopOvpn };
}