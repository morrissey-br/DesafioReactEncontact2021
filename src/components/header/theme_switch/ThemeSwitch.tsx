import { ThemeSwitchWrapper } from "./ThemeSwitchWrapper"
import { ThemeSwitchInput } from "./ThemeSwitchInput"
import { ThemeSwitchLabel } from "./ThemeSwitchLabel"
import { ChangeEvent, useState } from "react"

type ThemeSwitchProps = {
    darkMode: boolean
    onCheck: (darkMode: boolean) => void
}

export const ThemeSwitch = ({darkMode, onCheck}: ThemeSwitchProps) => {
    const [checked, setChecked] = useState(darkMode)

    const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
        onCheck(event.target.checked)
        setChecked(event.target.checked)
    }

    return (
        <ThemeSwitchWrapper>
            <ThemeSwitchInput checked={checked} onChange={handleCheckChange} type='checkbox' id='themeSwitchInput' />
            <ThemeSwitchLabel htmlFor='themeSwitchInput'></ThemeSwitchLabel>
        </ThemeSwitchWrapper>
    )
}