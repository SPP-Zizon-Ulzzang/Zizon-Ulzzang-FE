import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      Logo: string;
      Ballon: string;
      Black: string;
      White: string;
      Gray1: string;
      Gray2: string;
      Gray3: string;
      Gray4: string;
      Gray5: string;
      Green: string;
      Purple: string;
      Blue: string;
      Yellow: string;
      LightGreen: string;
      LightPurple: string;
      LightBlue: string;
      LightYellow: string;
    };
    fonts: {
      Head1: SerializedStyles;
      Head2: SerializedStyles;
      Head3: SerializedStyles;
      Title1: SerialzedStyles;
      Title2: SerialzedStyles;
      Body1: SerializedStyles;
      Body2: SerializedStyles;
      Body3: SerializedStyles;
      Body4: SerializedStyles;
      Body5: SerializedStyles;
      Body6: SerializedStyles;
      Body7: SerializedStyles;
    };
  }
}
