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
            <ControlBarItemsLeft>{itemsLeft} items left</ControlBarItemsLeft>       
            <ControlBarRouterWrapper>
                <ControlBarRouterLink exact to='/'>Todos</ControlBarRouterLink>
                <ControlBarRouterLink to='/active'>Ativos</ControlBarRouterLink>
                <ControlBarRouterLink to='/complete'>Completos</ControlBarRouterLink>
            </ControlBarRouterWrapper>  
            {anyToClean && (<ControlBarCleanCompleted onClick={handleCleanCompletedClick}>Clean completed</ControlBarCleanCompleted> )}   
        </ControlBarWrapper>
    ) : (<div></div>)
}
