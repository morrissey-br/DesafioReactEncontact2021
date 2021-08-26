import React from 'react'
import { Flag } from './Flag'
import { HeaderTitle } from './HeaderTitle'
import { HeaderWrapper } from './HeaderWrapper'
import brFlag from '../../assets/br_flag.png'
import usFlag from '../../assets/us_flag.png'
import { SwitchWrapper } from './SwitchsWrapper'
import { Translator } from '../../i18n/Translator'
import { ThemeSwitch } from './theme_switch/ThemeSwitch'

type HeaderProps = {
    activeFlag: string,
    darkMode: boolean,
    onFlagClick: (flag: string) => void,
    onSwitchModeClick: (darkMode: boolean) => void
}

export const Header = ({ activeFlag, darkMode, onFlagClick, onSwitchModeClick }: HeaderProps) => {

    const handleFlagClick = (flag: string) => {
        onFlagClick(flag)
    }

    const handleSwitchMode = (darkMode: boolean) => {
        onSwitchModeClick(darkMode)
    }
    return (
        <HeaderWrapper>
            <HeaderTitle>{Translator('header.title')}</HeaderTitle>
            <SwitchWrapper>
                <ThemeSwitch darkMode={darkMode} onCheck={(darkMode: boolean) => handleSwitchMode(darkMode)}></ThemeSwitch>
                <Flag active={activeFlag === 'pt-BR'} src={brFlag} onClick={() => handleFlagClick('pt-BR')}></Flag>
                <Flag active={activeFlag === 'en-US'} src={usFlag} onClick={() => handleFlagClick('en-US')}></Flag>
            </SwitchWrapper>
        </HeaderWrapper>
    )
}
