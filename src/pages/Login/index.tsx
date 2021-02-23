import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {
    SafeAreaView,
    Background,
    Container,
    Content,
    Title,
    SubTitle,
    FormContainer,
    Label,
    FormInput,
    FormButton,
    FormButtonText,
    ForgotPassword,
    ForgotText,
    ForgotTextUnderline,
    ErrorText
} from './styles';

import backgroundImage from '../../assets/woman-notebook.png';
import api from '../../services/api';
import { showMessage, hideMessage } from "react-native-flash-message";
import * as Yup from "yup";

import { Formik, ErrorMessage } from 'formik';

interface SignInFormData{
    email: string;
    password: string;
} 

const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Digite um e-mail válido;').required('Campo obrigatório.'),
    password: Yup.string().required('Campo obrigatório.'),
});

const Login: React.FC = () => {
    return (
        <>
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Container>
                        <Background source={backgroundImage} style={{ flex: 1, resizeMode: 'cover' }} />
                        <Content>
                            <Title>Olá, seja bem-vindo!</Title>
                            <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>
                            <FormContainer>
                                <Formik
                                    initialValues={{ email: '', password: '' }}
                                    validationSchema={SigninSchema}
                                    onSubmit={values => console.log(values)}
                                    // onSubmit={values => 
                                        
                                    // }
                                >
                                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                                        <>
                                            <Label>E-MAIL</Label>
                                            <FormInput
                                                autoCorrect={false}
                                                autoCapitalize="none"
                                                placeholder="user.name@mail.com"
                                                keyboardType="email-address"
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                value={values.email}
                                            />
                                            <ErrorText>
                                                <ErrorMessage name="email" />
                                            </ErrorText>

                                            <Label>SENHA</Label>
                                            <FormInput
                                                placeholder="senha"
                                                secureTextEntry
                                                onChangeText={handleChange('password')}
                                                onBlur={handleBlur('password')}
                                                value={values.password}
                                            />
                                            <ErrorText>
                                                <ErrorMessage name="password" />
                                            </ErrorText>
                                            
                                            <FormButton onPress={handleSubmit}>
                                                <LinearGradient colors={['#383E71', '#9D25B0']} style={styles.GradientButton}>
                                                    <FormButtonText>ENTRAR</FormButtonText>
                                                </LinearGradient>
                                            </FormButton>
                                        </>
                                    )}
                                </Formik>
                                <ForgotText>
                                    Esqueceu seu login ou senha?
                                </ForgotText>
                                <ForgotPassword>
                                    <ForgotTextUnderline>
                                        Clique aqui
                                    </ForgotTextUnderline>
                                </ForgotPassword>
                            </FormContainer>
                        </Content>
                    </Container>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    GradientButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        marginTop: 20,
        borderRadius: 8,
    },
});

export default Login;