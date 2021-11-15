import React from 'react';
import styled from 'styled-components';

const MyButtonStyle = styled.button`
  background: #9590eb;
  border-radius: 3px;
  border: none;
  color: white;
`;

/**
 * MyButton is a wrapper around a Button component.  Props/arguments are:
 * onClick(event:object) => void
 * style: Pass style onto <button> element
 */
function MyButton(props:any) {
    return (
        <MyButtonStyle style={props.style} type="button" onClick={props.onClick}>{props.children}</MyButtonStyle>
    );
}

export default MyButton;
