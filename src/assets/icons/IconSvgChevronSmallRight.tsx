import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ChevronSmallRight = () => (
  <Svg
    fill="black"
    style={{
      width: 15,
      height: 15,
    }}
    viewBox="0 0 1024 1024">
    <Path d="M256.013 1023.949a25.712 25.712 0 0 1-18.124-7.475c-9.984-9.984-9.984-26.213 0-36.197l442.653-442.653L237.889 94.971c-9.984-9.983-9.984-26.213 0-36.196s26.213-9.984 36.196 0l460.777 460.777c9.984 9.983 9.984 26.213 0 36.196l-460.777 460.777c-5.017 5.018-11.57 7.475-18.123 7.475z" />
  </Svg>
);
