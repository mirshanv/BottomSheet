import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const BottomSheet = ({ isVisible, onClose, onReset }) => {
    return (
        <Modal
            isVisible={isVisible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.6}
        >
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        padding: 16,
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ alignSelf: "center", opacity: 0.7, fontWeight: "550" }}> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</Text>
                    <TouchableOpacity onPress={onReset} style={{ marginTop: 16, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 17, }}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                onPress={onClose}
                style={{
                    backgroundColor: 'white',
                    padding: 14,
                    borderRadius: 10,
                    marginTop: 5,
                    height: 50
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Cancel</Text>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default BottomSheet;
