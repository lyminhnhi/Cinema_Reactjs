import React, { Component } from 'react';
import Carousel from '../ComponentHomeLayout/Carousel';
import SlideMovie from '../ComponentHomeLayout/Slide_Movie';
import InfomationMovie from '../ComponentHomeLayout/Infomation_Movie';


class HomeLayout extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <SlideMovie/>
                <InfomationMovie/>
            </div>
        );
    }
}

export default HomeLayout;