import React, { useState } from "react";
import { Colors } from "react-native-ui-lib";

// const Color_name = [ color_code_light, color_code_dark ]

const customTheme = {
    primaryColor: [ Colors.blue30, Colors.blue30 ],
    secondaryColor: [ Colors.blue30, Colors.blue30 ],
    tertiaryColor: [ Colors.blue30, Colors.blue30 ],

    trueColor: [ Colors.green5, Colors.green60],
    falseColor: [ Colors.red30, Colors.orange30 ],

    primaryTextColor: [ Colors.black, Colors.white ],
    secondaryTextColor: [ Colors.grey5, Colors.grey5 ],
    tertiaryTextColor: [ Colors.grey10, Colors.grey20 ],
    alertTextColor: [ Colors.red5, Colors.orange5 ],

    textColorTrue: [ Colors.green5, Colors.green60 ],
    textColorFalse: [ Colors.red30, Colors.orange30 ],

    backgroundColor: [ Colors.blue30, Colors.blue30 ],

    iconColor: [ Colors.grey5, Colors.grey5 ],
    iconColorActive: [ Colors.blue30, Colors.blue30 ],
    iconColorInactive: [ Colors.grey5, Colors.grey5 ],

    iconColorTrue: [ Colors.green5, Colors.green60 ],
    iconColorFalse: [ Colors.red30, Colors.orange30 ],

    iconColorPrimary: [ Colors.blue30, Colors.blue30 ],
    iconColorSecondary: [ Colors.grey5, Colors.grey5 ],
}

const Constants = () => {
    const [ theme, setTheme ] = useState(0);
    // 0 = light
    // 1 = dark

    const [ primaryColor, setPrimaryColor ] = useState(customTheme.primaryColor[theme]);
    const [ secondaryColor, setSecondaryColor ] = useState(customTheme.secondaryColor[theme]);
    const [ tertiaryColor, setTertiaryColor ] = useState(customTheme.tertiaryColor[theme]);

    const [ trueColor, setTrueColor ] = useState(customTheme.trueColor[theme]);
    const [ falseColor, setFalseColor ] = useState(customTheme.falseColor[theme]);

    const [ primaryTextColor, setPrimaryTextColor ] = useState(customTheme.primaryTextColor[theme]);
    const [ secondaryTextColor, setSecondaryTextColor ] = useState(customTheme.secondaryTextColor[theme]);
    const [ tertiaryTextColor, setTertiaryTextColor ] = useState(customTheme.tertiaryTextColor[theme]);
    const [ alertTextColor, setAlertTextColor ] = useState(customTheme.alertTextColor[theme]);


    const [ textColorTrue, setTextColorTrue ] = useState(customTheme.textColorTrue[theme]);
    const [ textColorFalse, setTextColorFalse ] = useState(customTheme.textColorFalse[theme]);

    const [ backgroundColor, setBackgroundColor ] = useState(customTheme.backgroundColor[theme]);
    
    return ({ setTheme, theme });
}

export default Constants;