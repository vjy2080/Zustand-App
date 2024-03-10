import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { styles } from './StackStyle';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

function Language  ({  }) {
    // const { t } = useTranslation(['welcome']);
  const locales = {
    en: { title: 'English' },
    lv: { title: 'Latviski' },
    es: { title: 'Español' },
  };
  const { t, i18n } = useTranslation();


  const [selected, setSelected] = React.useState("");

  const data = [
    { key: '1', value: 'English' },
    { key: '2', value: 'Hindi' },
    { key: '3', value: 'Gujarati' },
  ]

  if (selected) {
    console.log(selected);
  }


  return (
    <View style={styles.mainView}>
      <View>
        <FlatList
          data={Object.keys(locales)}
          renderItem={({ item: locale }) => (
            <View style={{ marginVertical: 5 }}>
              <Button
                title={locales[locale].title}
                onPress={() => i18n.changeLanguage(locale)}
                color={i18n.resolvedLanguage === locale ? 'blue' : 'black'}
              />
            </View>
          )}
          keyExtractor={(locale) => locale}
        />
      <View>
        <Text>
          {t('main.header')}
        </Text>
      </View>
      </View>
    </View>
  );
}


export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <Language />
    </Suspense>
  )
}
