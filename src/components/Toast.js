import {
    ToastAndroid
} from 'react-native';

export default showToast = (text) => {
    ToastAndroid.showWithGravity(
        text,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );
}