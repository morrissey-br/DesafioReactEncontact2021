import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CleanCompletedDiv, ItemsLeftDiv, RouterDiv, RouterLink, StatusBarWrapper } from '../styles/StatusBarStyle'

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
            <RouterDiv>
                <RouterLink exact to='/'>Todos</RouterLink>
                <RouterLink to='/active'>Ativos</RouterLink>
                <RouterLink to='/complete'>Completos</RouterLink>
            </RouterDiv>  
            {anyToClean ? 
                (<CleanCompletedDiv onClick={handleCleanCompletedClick}>Clean completed</CleanCompletedDiv> ) : 
                (<div></div>)}   
        </StatusBarWrapper>
    ) : (<div></div>)
}
