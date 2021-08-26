import { Translator } from "../../i18n/Translator";
import { ControlBarCleanCompleted } from "./ControlBarCleanCompleted";
import { ControlBarItemsLeft } from "./ControlBarItemsLeft";
import { ControlBarRouterLink } from "./ControlBarRouterLink";
import { ControlBarRouterWrapper } from "./ControlBarRouterWrapper";
import { ControlBarWrapper } from "./ControlBarWrapper";

type ControlBarProps = {
    itemsQuantity: number,
    itemsLeft: number,
    anyToClean: boolean,
    onCleanCompletedClick: () => void
}

export const ControlBar = ({itemsQuantity, itemsLeft, anyToClean, onCleanCompletedClick}: ControlBarProps) => {

    const handleCleanCompletedClick = () => {
        onCleanCompletedClick();
    }

    return itemsQuantity > 0 ? (
        <ControlBarWrapper>
            <ControlBarItemsLeft>{itemsLeft} {Translator(itemsLeft > 1 ? 'controlBar.moreThanOneItemLeft' : 'controlBar.oneItemLeft')}</ControlBarItemsLeft>       
            <ControlBarRouterWrapper>
                <ControlBarRouterLink exact to='/'>{Translator('controlBar.all')}</ControlBarRouterLink>
                <ControlBarRouterLink to='/active'>{Translator('controlBar.active')}</ControlBarRouterLink>
                <ControlBarRouterLink to='/complete'>{Translator('controlBar.complete')}</ControlBarRouterLink>
            </ControlBarRouterWrapper>  
            {anyToClean && (<ControlBarCleanCompleted onClick={handleCleanCompletedClick}>Clean completed</ControlBarCleanCompleted> )}   
        </ControlBarWrapper>
    ) : (<div></div>)
}
