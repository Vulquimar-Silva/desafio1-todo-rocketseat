import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'

import { styles } from './styles'

import imgLogo from '../../assets/img/png/Logo.png'
import imgLayerButton from '../../assets/img/png/Layer.png'
import imgClipboard from '../../assets/img/png/Clipboard.png'

import { ButtonRemove } from '../../components/ButtonRemove';

export function Home() {

  const [tasks, setTasks] = useState<string[]>([])
  const [taskName, setTaskName] = useState('')

  const countTaskCreated = tasks.map((item: any) => {
    if (item === 0) {
      return true;
    } else {
      return false;
    }
  }).length

  function handleTaskAdd() {

    if (tasks.includes(taskName)) {
      return Alert.alert("Essa tarefa já existe", "Adicione uma outra tarefa que não esteja na lista.")
    } else if ((taskName) == "") {
      return Alert.alert("Campo vazio", "Digite uma tarefa.")
    }

    setTasks(prevState => [...prevState, taskName])
    setTaskName('')
  }

  function handleTaskRemove(name: string) {

    Alert.alert("Excluir", `Tem certeza que dejesa remover a tarefa ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={imgLogo} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
          onChangeText={setTaskName}
          value={taskName}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Image source={imgLayerButton} />
        </TouchableOpacity>
      </View>

      <View style={styles.accountTasks}>
        <View style={styles.create}>
          <Text style={styles.taskCreate}>Criadas</Text>
          <Text style={styles.numberTaskAccountCreated}>
            {countTaskCreated}
          </Text>
        </View>

        <View style={styles.completed}>
          <Text style={styles.taskCompleted}>Concluídas</Text>
          <Text style={styles.numberTaskAccountCompleted}>
            {0} {/*Next feature :)*/}
          </Text>
        </View>
      </View>

      <Text style={styles.line} />

      <View style={styles.listContainer}>
        <FlatList
          data={tasks}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ButtonRemove
              key={item}
              name={item}
              onRemove={() => handleTaskRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View>
              <View style={styles.clipboard}>
                <Image source={imgClipboard} />
              </View>
              <Text style={styles.listTaskText1}>
                Você ainda não tem tarefas cadastradas
              </Text>

              <Text style={styles.listTaskText2}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />

      </View>
    </View>
  )
}