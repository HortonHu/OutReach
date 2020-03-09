import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import ImageView from "react-native-image-viewing";


export default class ResourcesScreen extends React.Component {
  render() {
    const materials = [
      'AntibioticsFINAL.png',
      'Blood_Pressure.jpg',
      'Coughprevention.jpg',
      'DiabetesFINAL.png',
      'Diabetes_footproblems.jpg',
      'Diabetes_symptoms.jpg',
      'Diabetes_symptoms.png',
      'Diabetic_Risk_Factors.jpg',
      'Diabetic_Foot_Care.jpg',
      'FASTFinal.jpg',
      'HandwashingFINAL.png',
      'KhatFINAL.png',
      'LeadFINAL.png',
      'MalariaFINAL.jpg',
      'MedicineAdherence.png',
      'StrokeReduction_FINAL.jpg',
      'Stroke_recovery.jpg',
      'Tuberculosis_Prevention.png',
    ];
    const createMaterials = () => {
      let materialButtons = [];

      materials.forEach((materialName) => {

        materialButtons.push(
          <TouchableNativeFeedback
            key={materialName.toString()}
            onPress={() => this.props.navigation.navigate('MaterialDetail', {
              materialName: materialName
            })}
          >
            <View
              style={styles.button}
            >
              <Text style={styles.text}>{materialName.toString().split('.')[0]}</Text>
            </View>

          </TouchableNativeFeedback>

        );
      });
      return materialButtons;
    };

    // const images = [
    //   {uri: '../assets/images/educationalmaterials/AntibioticsFINAL.png'},
    //   {uri: '../assets/images/educationalmaterials/Blood_Pressure.jpg'},
    //   {uri: '../assets/images/educationalmaterials/Coughprevention.jpg'},
    //   {uri: '../assets/images/educationalmaterials/DiabetesFINAL.png'},
    //   {uri: '../assets/images/educationalmaterials/Diabetes_footproblems.jpg'},
    //   {uri: '../assets/images/educationalmaterials/Diabetes_symptoms.jpg'},
    //   {uri: '../assets/images/educationalmaterials/Diabetes_symptoms.png'},
    //   {uri: '../assets/images/educationalmaterials/Diabetic_Risk_Factors.jpg'},
    //   {uri: '../assets/images/educationalmaterials/Diabetic_Foot_Care.jpg'},
    //   {uri: '../assets/images/educationalmaterials/FASTFinal.jpg'},
    //   {uri: '../assets/images/educationalmaterials/HandwashingFINAL.png'},
    //   {uri: '../assets/images/educationalmaterials/KhatFINAL.png'},
    //   {uri: '../assets/images/educationalmaterials/LeadFINAL.png'},
    //   {uri: '../assets/images/educationalmaterials/MalariaFINAL.jpg'},
    //   {uri: '../assets/images/educationalmaterials/MedicineAdherence.png'},
    //   {uri: '../assets/images/educationalmaterials/StrokeReduction_FINAL.jpg'},
    //   {uri: '../assets/images/educationalmaterials/Stroke_recovery.jpg'},
    //   {uri: '../assets/images/educationalmaterials/Tuberculosis_Prevention.png'},
    // ];
    // const [visible, setIsVisible] = useState(false);

    return (
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
        {createMaterials()}
        </View>

        {/*<Modal visible={true} transparent={true}>*/}
        {/*  <ImageViewer*/}
        {/*    imageUrls={images}*/}
        {/*    enableSwipeDown={true}*/}
        {/*    onClick={(onCancel) => {onCancel()}}*/}
        {/*  />*/}
        {/*</Modal>*/}
        {/*<ImageView*/}
        {/*  images={images}*/}
        {/*  imageIndex={0}*/}
        {/*  visible={visible}*/}
        {/*  onRequestClose={() => setIsVisible(false)}*/}
        {/*/>;*/}

      </View>
    );
  }

}

ResourcesScreen.navigationOptions = {
  title: 'Resources',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'gray',
    width: "100%",
    marginVertical: 5,
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
});
