import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from "./styles";

import imgTrash from '../../assets/img/png/Trash.png'

type Props = {
  name: string;
  onRemove: () => void;
}


export function Tasks({ name, onRemove }: Props) {

  return (
    <View style={styles.containerButton}>
      <Text style={styles.nameButton}>
        <BouncyCheckbox
          size={20}
          fillColor="#5E60CE"
          unfillColor="#333333"
          text={name}
          textStyle={{ fontSize: 15, }}
          onPress={
            (isChecked: boolean) => {
              isChecked === true ? {
                textDecorationLine: 'line-through', textDecorationStyle: 'solid'
              } : ""
            }
          }
        />

      </Text>

      <TouchableOpacity style={styles.buttonRemove} onPress={onRemove}>
        <Image source={imgTrash} />
      </TouchableOpacity>

    </View>
  );
}