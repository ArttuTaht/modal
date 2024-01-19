import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  
  const toggle = () => {
    setModalVisible(prevVisible => !prevVisible)
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={toggle}>
        <Text>
          Show modal message
        </Text>
      </Pressable>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          onRequestClose={() => {setModalVisible(!modalVisible);
        }}>
          <View style={styles.container}>
            <View style={styles.modalView}>
              <Text>This is modal...</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});
