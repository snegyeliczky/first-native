import React, {FC} from 'react'
import {TouchableOpacity, Image, ImageSourcePropType, DimensionValue} from 'react-native'

import styles from './screenheader.style'

type Props = {
    iconUrl: ImageSourcePropType
    dimension: DimensionValue
    handlePress: Function
}


const ScreenHeaderBtn: FC<Props> = ({dimension, handlePress, iconUrl}) => {
    const btnStyle = styles(dimension)
    return (
        <TouchableOpacity style={btnStyle.btnContainer}>
            <Image source={iconUrl} style={btnStyle.btnImg} resizeMode={"cover"}/>
        </TouchableOpacity>
    )
}

export default ScreenHeaderBtn