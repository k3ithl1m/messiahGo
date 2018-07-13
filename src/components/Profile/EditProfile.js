import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Text,
  TouchableOpacity
} from "react-native";
import { ImagePicker } from "expo";
// import ImagePicker from "react-native-image-picker";
// import RNFetchBlob from "react-native-fetch-blob";
import firebase from "../../DataStorage/firebaseServices";
import EditProfileForm from "./EditProfileForm";
import goStyles from "../../Styling/goStyles";
import ProfileImage from "./ProfileImage";

class CreateUserAndPass extends Component {
  state = { profileImage: null };
  //
  // componentWillMount() {
  //   const { currentUser } = firebase.auth();
  //   const imgRef = firebase.storage().ref(`profileImages/${currentUser.uid}`);
  //   const dummyRef = firebase.storage().ref("profileImages/dummyImage.png");
  //
  //   imgRef
  //     .getDownloadURL()
  //     .then(img => {
  //       this.setState({ uploadURL: img });
  //     })
  //     .catch(() => {
  //       dummyRef.getDownloadURL().then(dummy => {
  //         this.setState({ uploadURL: dummy });
  //       });
  //
  //       switch (error.code) {
  //         case "storage/object_not_found":
  //           console.log("Reference image does not exist.");
  //           break;
  //         case "storage/unauthorized":
  //           console.log("Unauthorized to access data.");
  //           break;
  //         case "storage/cancelled":
  //           console.log("Access cancelled.");
  //           break;
  //         case "storage/unknown":
  //           console.log("Unknown Error occurred.");
  //           break;
  //       }
  //     });
  // }
  //
  // pickImage() {
  //   ImagePicker.launchImageLibrary({}, response => {
  //     uploadImage(response.uri)
  //       .then(url => this.setState({ uploadURL: url }))
  //       .catch(error => console.log(error));
  //   });
  // }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ profileImage: result.uri });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.containerStyle}>
        <TouchableOpacity style={{ height: 120 }} onPress={this._pickImage}>
          <ProfileImage
            image_url={this.state.profileImage}
            greyEditModeStyle={styles.editMode}
            text="Edit"
          />
        </TouchableOpacity>

        <EditProfileForm />
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: goStyles.background,
    justifyContent: "center"
  },
  editMode: {
    opacity: 0.5
  }
};

// const options = {
//   title: "Select Profile Image",
//   customButtons: [
//     {
//       name: "fb",
//       title: "Choose Photo from Library"
//     }
//   ],
//   storageOptions: {
//     skipBackup: true,
//     path: "https://i.imgur.com/K3KJ3w4h.jpg"
//   }
// };
//
// // CREDIT: https://github.com/CodeLinkIO/Firebase-Image-Upload-React-Native
// const Blob = RNFetchBlob.polyfill.Blob;
// const fs = RNFetchBlob.fs;
// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
// window.Blob = Blob;
//
// const uploadImage = (uri, mime = "application/octet-stream") => {
//   return new Promise((resolve, reject) => {
//     const uploadUri = Platform.OS === "ios" ? uri.replace("file://", "") : uri;
//     const sessionId = new Date().getTime();
//     const { currentUser } = firebase.auth();
//
//     let uploadBlob = null;
//     const imageRef = firebase
//       .storage()
//       .ref("profileImages")
//       .child(`${currentUser.uid}`);
//
//     fs
//       .readFile(uploadUri, "base64")
//       .then(data => {
//         return Blob.build(data, { type: `${mime};BASE64` });
//       })
//       .then(blob => {
//         uploadBlob = blob;
//         return imageRef.put(blob, { contentType: mime });
//       })
//       .then(() => {
//         uploadBlob.close();
//         return imageRef.getDownloadURL();
//       })
//       .then(url => {
//         resolve(url);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };

export default CreateUserAndPass;
