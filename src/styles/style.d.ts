import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      Background: string;
      Main: string;
      Description: string;
      Button_Active: string;
      Button_Disabled: string;
      Input_Area: string;
      Information: string;
    };
    fonts: {
      Main: SerializedStyles;
      Description: SerializedStyles;
      Button: SerializedStyles;
      Input_Main: SerialzedStyles;
      Input_Before: SerialzedStyles;
      Input_After: SerializedStyles;
      Information: SerializedStyles;
    };
  }
}
