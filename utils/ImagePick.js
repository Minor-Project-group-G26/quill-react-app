import * as ImagePicker from 'expo-image-picker'


export const PickSingleImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing: true,
    //   aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      return result;
    }
    return null;
}
export const PickSingleVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    //   allowsEditing: true,
    //   aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      return result;
    }
    return null;
}

export const PickSingleFile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      return result;
    }
    return null;
}