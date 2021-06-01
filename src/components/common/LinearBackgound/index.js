import React from 'react'

import {LinearGradient} from 'expo-linear-gradient'


function LinearBackgound({children, style={}, colors=['#C3073F', '#1A1A1D','#1A1A1D']}) {


    return (
            <LinearGradient
                colors={colors}
                style={[{flex:1}, style]}
            >
            {children}

            </LinearGradient>

    )
}

export default LinearBackgound
