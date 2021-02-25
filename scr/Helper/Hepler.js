import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const HSize = (value) => {
    return (value / 756) * height
}

const WSize = (value) => {
    return (value / 375) * width
}
export {
    HSize,
    WSize,

}