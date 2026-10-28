import React from 'react';
import {ScrollView} from 'react-native';
import Movie from './components/Movie';


// Ex1: User-defined component Movie with properties title and year

class AllMovies extends React.Component {
    render(){
        return(
            <ScrollView>
                    <Movie title={'Doctor Sleep'} year={2019} icon_name={"skull"} icon_color={"grey"} poster={require("./img/doctor-sleep.jpg")}/>
                    <Movie title={'Midway'} year={2019} icon_name={"person-rifle"} icon_color={"pink"} poster={require("./img/midway.jpg")} />
                    <Movie title={'titanic'} year={1997} icon_name={"ship"} icon_color={"blue"} poster={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQoLUoqW2YvCKokVBIW-0fbysY5UPEuqqtHkE0O_QjBQ&s=10'}} />
            </ScrollView>


        )
    }
}

export default AllMovies;
