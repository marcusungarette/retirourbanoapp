import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  ImageLogo,
  BackToSignIn,
  BackToSignInText,
  Title,
} from './styles';

import logoImg from '../../assets/logo300ppi.png';

const SignUp: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <ImageLogo source={logoImg} resizeMode="contain" />
            <Title>Crie sua conta</Title>

            <Input name="name" icon="user" placeholder="Nome" />

            <Input name="email" icon="mail" placeholder="E-mail" />

            <Input name="password" icon="lock" placeholder="Senha" />
            <Button
              onPress={() => {
                console.log('deu');
              }}
            >
              Entrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn
        onPress={() => {
          console.log('deu');
        }}
      >
        <Icon name="arrow-left" size={20} color="#715fa9" />
        <BackToSignInText>Voltar</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
