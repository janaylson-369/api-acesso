import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { Input, InputField } from '@/components/ui/input';
import { Button, ButtonText } from '@/components/ui/button';
import { Alert, AlertIcon, AlertText } from '@/components/ui/alert';
import { InfoIcon } from '@/components/ui/icon';

export default function TelaAdicionar() {
  const roteador = useRouter();

  const [dono, setDono] = useState('');
  const [repositorio, setRepositorio] = useState('');
  const [mensagemAlerta, setMensagemAlerta] = useState('');

  const adicionar = () => {
    if (!dono.trim() || !repositorio.trim()) {
      setMensagemAlerta('Preencha o ownerid e o repoid.');
      return;
    }

    setMensagemAlerta(`Owner: ${dono} | Repo: ${repositorio}`);
  };

  return (
    <Box style={estilos.container}>
      <VStack space="xl">
        <VStack space="xs">
          <Heading size="lg" style={estilos.titulo}>
            Adicionar Repositório
          </Heading>
          <Text size="sm" style={estilos.subtitulo}>
            Preencha os identificadores do repositório:
          </Text>
        </VStack>

        {mensagemAlerta ? (
          <Alert>
            <AlertIcon as={InfoIcon} />
            <AlertText>{mensagemAlerta}</AlertText>
          </Alert>
        ) : null}

        <VStack space="md">
          <VStack space="xs">
            <Text size="sm" style={estilos.rotulo}>
              ownerid
            </Text>
            <Input>
              <InputField
                placeholder="Ex: facebook"
                value={dono}
                onChangeText={(texto) => {
                  setDono(texto);
                  if (mensagemAlerta) setMensagemAlerta('');
                }}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </Input>
          </VStack>

          <VStack space="xs">
            <Text size="sm" style={estilos.rotulo}>
              repoid
            </Text>
            <Input>
              <InputField
                placeholder="Ex: react-native"
                value={repositorio}
                onChangeText={(texto) => {
                  setRepositorio(texto);
                  if (mensagemAlerta) setMensagemAlerta('');
                }}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </Input>
          </VStack>
        </VStack>

        <VStack space="sm" style={estilos.areaBotoes}>
          <Button size="lg" onPress={adicionar} style={estilos.botaoAdicionar}>
            <ButtonText style={estilos.textoBotaoAdicionar}>Adicionar</ButtonText>
          </Button>

          <Button
            size="lg"
            variant="outline"
            onPress={() => roteador.back()}
            style={estilos.botaoCancelar}
          >
            <ButtonText style={estilos.textoBotaoCancelar}>Cancelar</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 24,
  },
  titulo: {
    color: '#0F172A',
  },
  subtitulo: {
    color: '#64748B',
  },
  rotulo: {
    fontWeight: '500',
    color: '#334155',
  },
  areaBotoes: {
    paddingTop: 8,
  },
  botaoAdicionar: {
    backgroundColor: '#2563EB',
  },
  textoBotaoAdicionar: {
    color: '#FFFFFF',
  },
  botaoCancelar: {
    borderColor: '#94A3B8',
  },
  textoBotaoCancelar: {
    color: '#334155',
  },
});