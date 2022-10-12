import React, {useContext} from 'react';
import {HeaderDesktop} from "./desktop/HeaderDesktop";
import {HeaderMobile} from "./mobile/HeaderMobile";
import {ThemeContext} from "../Context";

export const Header = () => {
    const {width} = useContext(ThemeContext);
    return (
        <>
            {width < 750? <HeaderMobile/> : <HeaderDesktop/>}
        </>
    );
}