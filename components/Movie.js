import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";



// Ex1: User-defined component Movie with properties title and year

const Movie = ({title, year, icon_name, icon_color, poster}) => {
    return (
        <View>

            <Text></Text>
            <Image source={poster} style={{width:400, height:700}} />
            <Text>
                Movie: {title} {year}
            </Text>
            <Text>
                <FontAwesome6 name={icon_name} size={20} color={icon_color}/>
            </Text>

        </View>
    );
};
export default Movie;