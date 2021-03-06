import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const ButtonBox = styled.div`
    max-width:${props => props.maxWidth ? props.maxWidth : "144px"};
    min-height:${props => props.minHeight ? props.minHeight : "42px"};
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    border-radius: 50px;
    color:white;
    font-weight:${props => props.fontWeight ? props.fontWeight : "normal"};
    font-size:${props => props.fontSize ? props.fontSize : "20px"};
    background-color:${props => props.backgroundColor ? props.backgroundColor : "#FFBF00"};
    border:${props => props.border ? props.border : "none"};
    margin:${props => props.margin ? props.margin : "0"};
    &:hover {
        background-color:${props => props.hoverColor ? props.hoverColor : "#D79B00"};
    }
`;

const Cont = styled.div`
    max-width:${props => props.maxWidth ? props.maxWidth : "144px"};    
    min-width:${props => props.minWidth ? props.minWidth : "144px"};
    min-height:${props => props.minHeight ? props.minHeight : "42px"};
`;

const Button = ({ text, fontWeight, fontSize, backgroundColor, hoverColor, maxWidth, minWidth, minHeight, border, margin, onClick }) => {

    return <Cont>
        <motion.div
            whileTap={{ scale: 0.9 }}
        >
            <ButtonBox
                fontWeight={fontWeight} fontSize={fontSize} backgroundColor={backgroundColor} hoverColor={hoverColor} maxWidth={maxWidth} minWidth={minWidth} minHeight={minHeight} border={border} margin={margin} onClick={onClick}
            >
                {text}
            </ButtonBox>
        </motion.div>
    </Cont>
}

Button.defaultProps = {
    text: "Text",
    onClick:()=>{}
}

export default Button;