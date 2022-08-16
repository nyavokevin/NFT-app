import { TouchableOpacity,View, Text, Image } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'


export const CircleButton = ({ imgUrl, handlePres, ...props }) => {
  return (
   <TouchableOpacity style={{
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    position: "absolute",
    borderRadius: SIZES.extraLarge,
    alignItems: "center",
    alignItems: "center",
    ...SHADOWS.light,
    ...props
   }} onPress={ handlePres } >

    <Image source={imgUrl}  resizeMode="contain" style={{ height:25, width:25, marginTop:5.8 }}/>

   </TouchableOpacity>
  )
}

export const RectButton = ({minWidth, fontSize, handlePress, ...props}) =>{
    return(
        <TouchableOpacity style={{
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.extraLarge,
            minWidth: minWidth,
            padding: SIZES.small,
            ...props
           }} onPress={ handlePress } >
        
            <Text style={{
                fontFamily: FONTS.medium,
                fontSize: fontSize,
                color: COLORS.white,
                textAlign: 'center'
            }}
            >Place a bid</Text>
        
           </TouchableOpacity>
    )
}