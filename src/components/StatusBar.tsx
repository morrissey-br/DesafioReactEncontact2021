import React from 'react'
import { CleanCompletedDiv, ItemsLeftDiv, RouterDiv, StatusBarWrapper } from '../styles/StatusBarStyle'

type StatusBarProps = {
    itemsQuantity: number,
    itemsLeft: number,
    anyToClean: boolean,
    onCleanCompletedClick: () => void
}

export const StatusBar = ({itemsQuantity, itemsLeft, anyToClean, onCleanCompletedClick}: StatusBarProps) => {

    const handleCleanCompletedClick = () => {
        onCleanCompletedClick();
    }

    return itemsQuantity > 0 ? (
        <StatusBarWrapper>
            <ItemsLeftDiv>{itemsLeft} items left</ItemsLeftDiv>       
            <RouterDiv>2</RouterDiv>  
            {anyToClean ? 
                (<CleanCompletedDiv onClick={handleCleanCompletedClick}>Clean completed</CleanCompletedDiv> ) : 
                (<div></div>)}   
        </StatusBarWrapper>
    ) : (<div></div>)
}
