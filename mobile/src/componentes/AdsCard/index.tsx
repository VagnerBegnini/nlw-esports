import { View, TouchableOpacity, Text } from 'react-native';
import { GameController } from 'phosphor-react-native';

import { AdsCardInfo } from '../AdsCardInfo';

import { THEME } from '../../theme';
import { styles } from './styles';

export interface AdsCardProps {
    id: string;    
    hourEnd: string;
    hourStart: string;
    name: string;
    useVoiceChannel: boolean;
    weekDays: string[];
    yearsPlaying: number;
}

interface Props {
    data: AdsCardProps;
    onConnect: () => void;
}

export function AdsCard({data, onConnect}: Props) {
  return (
    <View style={styles.container}>
        <AdsCardInfo 
            label='Nome'
            value={data.name}
        />
        <AdsCardInfo 
            label='Tempo de jogo'
            value={`${data.yearsPlaying} anos`}
        />
        <AdsCardInfo 
            label='Disponibilidade'
            value={`${data.weekDays.length} dias \u2022 ${data.hourStart}h - ${data.hourEnd}h`}
        />

        <AdsCardInfo 
            label='Chamada de áudio?'
            value={data.useVoiceChannel ? 'Sim' : 'Não'}
            colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
        />

        <TouchableOpacity 
            style={styles.button}
            onPress={onConnect}
        >
            <GameController
                color={THEME.COLORS.TEXT}
                size={20} 
            />

            <Text style={styles.buttonTitle}>
                Conectar
            </Text>

        </TouchableOpacity>
    </View>
  );
}