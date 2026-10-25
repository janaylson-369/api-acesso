import React, { useLayoutEffect } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';

import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';

export default function TelaInicial() {
  const roteador = useRouter();
  const navegacao = useNavigation();

  useLayoutEffect(() => {
    navegacao.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => roteador.push('/add')}
          style={estilos.botaoAdicionar}
          activeOpacity={0.7}
        >
          <Text style={estilos.textoBotao}>+</Text>
        </TouchableOpacity>
      ),
    });
  }, [navegacao, roteador]);

  return (
    <Box style={estilos.container}>
      <Heading style={estilos.titulo}>
        Tela de Repositórios
      </Heading>
      <Text style={estilos.subtitulo}>
        Toque no botão + acima para adicionar um novo repositório.
      </Text>
    </Box>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
  },
  botaoAdicionar: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -2,
  },
});