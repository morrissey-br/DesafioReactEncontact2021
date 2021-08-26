import { useTranslation } from "react-i18next"

export const Translator = (path: string) => {
    const { t } = useTranslation()
    return t(path)
}