import React from 'react';
import { StyleSheet, Button, View, TextInput, Text, AsyncStorage, Image, Modal, Dimensions  } from 'react-native';
// import ImageViewer from 'react-native-image-zoom-viewer';


export default class MaterialDetailScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const materialName = navigation.getParam('materialName');

    const getMaterialSource = (materialName) => {
      switch (materialName) {
        case "AntibioticsFINAL.png":
          return require('../assets/images/educationalmaterials/AntibioticsFINAL.png');
        case "Blood_Pressure.jpg":
          return require('../assets/images/educationalmaterials/Blood_Pressure.jpg');
        case "Coughprevention.jpg":
          return require('../assets/images/educationalmaterials/Coughprevention.jpg');
        case "DiabetesFINAL.png":
          return require('../assets/images/educationalmaterials/DiabetesFINAL.png');
        case "Diabetes_footproblems.jpg":
          return require('../assets/images/educationalmaterials/Diabetes_footproblems.jpg');
        case "Diabetes_symptoms.jpg":
          return require('../assets/images/educationalmaterials/Diabetes_symptoms.jpg');
        case "Diabetes_symptoms.png":
          return require('../assets/images/educationalmaterials/Diabetes_symptoms.png');
        case "Diabetic_Risk_Factors.jpg":
          return require('../assets/images/educationalmaterials/Diabetic_Risk_Factors.jpg');
        case "Diabetic_Foot_Care.jpg":
          return require('../assets/images/educationalmaterials/Diabetic_Foot_Care.jpg');
        case "FASTFinal.jpg":
          return require('../assets/images/educationalmaterials/FASTFinal.jpg');
        case "HandwashingFINAL.png":
          return require('../assets/images/educationalmaterials/HandwashingFINAL.png');
        case "KhatFINAL.png":
          return require('../assets/images/educationalmaterials/KhatFINAL.png');
        case "LeadFINAL.png":
          return require('../assets/images/educationalmaterials/LeadFINAL.png');
        case "MalariaFINAL.jpg":
          return require('../assets/images/educationalmaterials/MalariaFINAL.jpg');
        case "MedicineAdherence.png":
          return require('../assets/images/educationalmaterials/MedicineAdherence.png');
        case "StrokeReduction_FINAL.jpg":
          return require('../assets/images/educationalmaterials/StrokeReduction_FINAL.jpg');
        case "Stroke_recovery.jpg":
          return require('../assets/images/educationalmaterials/Stroke_recovery.jpg');
        case "Tuberculosis_Prevention.png":
          return require('../assets/images/educationalmaterials/Tuberculosis_Prevention.png');
      }
    };

    // const images = [
    //   {
    //     url: '',
    //     props: {
    //       source: getMaterialSource(materialName),
    //     },
    //   },
    // ];

    return (
      <View style={styles.container}>
        {/*<Modal visible={true} transparent={true}>*/}
        {/*  <ImageViewer imageUrls={images}/>*/}
        {/*</Modal>*/}

        <Image
          source={getMaterialSource(materialName)}
          style={styles.img}
        />
      </View>
    );
  }

};

MaterialDetailScreen.navigationOptions = {
  title: 'Material',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    // flex: 1,
    width: 400,
    height: 400,
    resizeMode: 'contain'
  }
});
