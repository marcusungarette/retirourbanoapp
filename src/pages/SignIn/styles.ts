import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const ImageLogo = styled.Image`
  width: 270px;
  height: 270px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #000;
  font-family: 'Quicksand-Regular';
  letter-spacing: 1px;
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 16px;
  font-family: 'Quicksand-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
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

export const CreateAccountButtonText = styled.Text`
  color: #000;
  font-size: 18px;
  font-family: 'Quicksand-Regular';
  margin-left: 12px;
`;
