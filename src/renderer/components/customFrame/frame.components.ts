import styled from 'styled-components';

interface buttonContainerProps{
    readonly close?: boolean;
}

export const FrameContainer = styled.nav`
    width: 100%;
    height: 30px;
    background-color: var(--primary);
    display: flex;
    justify-content: space-between;
    -webkit-app-region: drag;
`;

export const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
`;

export const ButtonContainer = styled.div<buttonContainerProps>`
    width: 40px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-app-region: no-drag;
    cursor: pointer;
    &:hover{
        background-color: ${props => props.close ? 'red' : 'var(--tertiaty)'};
    }
`;
export const MinimizeIcon = styled.div`
    width: 14px;
    height: 13px;
    border-bottom: 1px solid var(--font);
`;

export const MaximizeIcon = styled.div`
    width: 12px;
    height: 10px;
    border: solid var(--font);
    border-width: 1px 1px 3px 1px;
`;

export const CloseCross = styled.div`
    width: 14px;
    height: 16px;
    position: relative;
    &:before, &:after {
        content: '';
        height: 16px;
        border-left: 1px solid var(--font);
        position: absolute;
        left: 6px;
    }
    &:before {
        transform: rotate(-45deg);
    }
    &:after {
        transform: rotate(45deg);
    }
`;