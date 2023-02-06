import {Dimensions} from 'react-native';
export const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary:'#EA5297',
    gray2:'#7C7C7C',
    white:'#ffffff',
    gray1 :'#636363',
    black:'#000000',
    black2:'#444444',
    red:'#FF0000',
    
}
const FONTS = {
    heading:{
        
    }
}

export function commonFontStyle(size,weight,color){
    return {
       fontSize: size,
       fontWeight:weight,
       color:color
    }
}
const Theme = {COLORS,commonFontStyle};

export default Theme;
