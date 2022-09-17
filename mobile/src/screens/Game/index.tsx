import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import { Background } from '../../componentes/Background';
import { Heading } from '../../componentes/Heading'
import { AdsCard, AdsCardProps } from '../../componentes/AdsCard';
import { DuoMatch } from '../../componentes/DuoMatch';

import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';
import { GameParams } from '../../@types/navigation';




export function Game() {
  const [adsCard, setAdsCard] = useState<AdsCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');
  
  const route = useRoute();
  const navigation = useNavigation();
  const game = route.params as GameParams;


  function handleGoBack() {
    navigation.goBack();
  }

  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.1.8:3333/ads/${adsId}/discord`)
    .then(response => response.json())
    .then(data => {
      setDiscordDuoSelected(data.discord);
      console.log(adsId);
      console.log(data);
    })        
  };

  useEffect(() => {
    fetch(`http://192.168.1.8:3333/games/${game.id}/ads`)
    .then(response => response.json())
    .then(data => {
      setAdsCard(data);
      console.log(data);
    })
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20} 
            />
          </TouchableOpacity>

          <Image 
            source={logoImg} 
            style={styles.logo} />

          <View style={styles.right} />
        </View>

        <Image 
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode='center'
          />

        <Heading 
            title={game.title}
            subtitle='Conecte-se e comece a jogar!' 
        />
        
        <FlatList 
          data={adsCard}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <AdsCard 
              data={item}               
              onConnect={() => getDiscordUser(item.id)}
            />
          )}
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.containerList}
          contentContainerStyle={[adsCard.length > 0 ? styles.contentList : styles.empytListContent]}           
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios pulicados ainda.
            </Text>
          )}
        />       

        <DuoMatch 
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        />
      </SafeAreaView>
    </Background>
  );
}