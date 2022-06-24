import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/88017280?v=4';

const urlToMyGithub = 'https://github.com/hercullanolima';
const App = () => {
  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="foto do perfil do Github"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Nome Herculano Lima"
          style={(style.defaultText, style.name)}>
          Herculano Lima
        </Text>
        <Text
          accessibilityLabel="Nickname Herculano Lima"
          style={(style.defaultText, style.nickname)}>
          HerculanoLima
        </Text>
        <Text
          accessibilityLabel="descrição: Formado em Processamento de dados. Desenvolvedor Front End e Back
          End(em formação"
          style={(style.defaultText, style.description)}>
          Formado em Processamento de dados. Desenvolvedor Front End e Back
          End(em formação)
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={(style.defaultText, style.textButton)}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 20,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
