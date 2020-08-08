import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const ImageLogo = styled.Image`
  width: 230px;
  height: 220px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #000;
  font-family: 'Quicksand-Regular';
  letter-spacing: 1px;
  margin: 24px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #c5bce6;
  border-top-width: 1px;
  border-color: #000;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #000;
  font-size: 18px;
  font-family: 'Quicksand-Regular';
  margin-left: 12px;
`;
