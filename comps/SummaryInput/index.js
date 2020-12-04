import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import BriefInput from '../BriefInput';
import InputText from '../Input';

const SummaryInputCont = styled.div`
    margin: 0px;
    min-width: 616px;
    min-height: 433px;
    display: inline-flex;
    flex-direction: column;
    justify-content: left;
    align-content: left;
`;

const HeaderInputBox = styled.div`
    font-size:28px;
`;

const SummaryInputBox = styled.div`
`;
const SummaryInputImg = styled.img`
    margin-right:15px;
`;

const SummaryInput = ({ story, onChange }) => {
    const [focused, setFocused] = useState(false)
    return <SummaryInputCont onClick={() => {
        setFocused(true);
    }}>
        <HeaderInputBox>
            <InputText placeholder={"Full Name"} width={"80%"} margin={"10px 0"} />
            <InputText placeholder={"Program Name"} width={"80%"} margin={"5px 0"} onChange={onChange} />
        </HeaderInputBox>

        {story === false ? null : <SummaryInputBox>
            <SummaryInputImg src={"briefcase.png"} />
            <InputText placeholder={"Work Experience"} margin={"50px 0 0 0"} width={"50%"} />
        </SummaryInputBox>}
        {story === false ? null : <SummaryInputBox>
            <SummaryInputImg src={"cap.png"} />
            <InputText placeholder={"Level of Education"} margin={"15px 0 0 0"} width={"50%"} />
        </SummaryInputBox>}
        {story === false ? null : <SummaryInputBox>
            <InputText placeholder={"Hours of Availability, Zoom Link"} margin={"15px 0 0 46px"} width={"50%"} />
        </SummaryInputBox>}

        {/* <BriefInput image={true} width="498px"/>
        <BriefInput image={true} src="/mortarboard.png" text="Diploma of Computer Science
    Studying for Bachelor’s of Computer Science" width="455px"/>
        <BriefInput marL="42px" width="226px" text="Mondays – 13:30-17:30 Thursdays – 9:00-12:00 Zoom Link: www.zoomlink.com"/> */}
    </SummaryInputCont>

}

SummaryInput.defaultProps = {
    HeadTxt: "Sarah Lee",
    SubTxt: "Peer Tutor, Computer Science, BCIT",
    story: true
}

export default SummaryInput;