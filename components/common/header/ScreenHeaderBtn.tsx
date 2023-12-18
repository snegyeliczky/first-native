import React, {FC} from 'react'
import {TouchableOpacity, Image, ImageSourcePropType, DimensionValue, GestureResponderEvent} from 'react-native'

import styles from './screenheader.style'

type Props = {
    iconUrl: ImageSourcePropType
    dimension: DimensionValue
    handlePress: (event: GestureResponderEvent) => void
}


const ScreenHeaderBtn: FC<Props> = ({dimension, handlePress, iconUrl}) => {
    const btnStyle = styles(dimension)
    return (
        <TouchableOpacity style={btnStyle.btnContainer} onPress={handlePress}>
            <Image source={iconUrl} style={btnStyle.btnImg} resizeMode={"cover"}/>
        </TouchableOpacity>
    )
}

export default ScreenHeaderBtn