import React, {FC, useState} from 'react';
import * as FrameComponents from './frame.components';
import {remote} from 'electron';

const currentWindow = remote.getCurrentWindow();

const CustomFrame: FC = () => {

    const [isMaximized, setIsMaximized] = useState<boolean>(false);

    const closeWindow = currentWindow.close;
    const maximizeWindow = () => {
        isMaximized ? currentWindow.unmaximize() : currentWindow.maximize();
        setIsMaximized(!isMaximized);
    }
    const minimizeWindow = currentWindow.minimize;

    return(
        <FrameComponents.FrameContainer>
            <FrameComponents.ControlsContainer>
                <FrameComponents.ButtonContainer onClick={() => minimizeWindow()}>
                    <FrameComponents.MinimizeIcon/>
                </FrameComponents.ButtonContainer>
                <FrameComponents.ButtonContainer onClick={() => maximizeWindow()}>
                    <FrameComponents.MaximizeIcon/>
                </FrameComponents.ButtonContainer>
                <FrameComponents.ButtonContainer onClick={() => closeWindow()} close>
                    <FrameComponents.CloseCross/>
                </FrameComponents.ButtonContainer>
            </FrameComponents.ControlsContainer>
        </FrameComponents.FrameContainer>
    )
}

export default CustomFrame;