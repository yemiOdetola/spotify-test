import React from 'react'
import type { OverridableComponent } from "@material-ui/core/OverridableComponent";
import type { SvgIconTypeMap, } from "@material-ui/core/SvgIcon/SvgIcon";

import './sidebarOption.styles.css'

interface SidebarOptionElement {
    title: string;
    Icon?: OverridableComponent<SvgIconTypeMap>;
    onClick?: () => void;
}

function SidebarOption({ title, Icon, onClick }: SidebarOptionElement) {
    return (
        <div className='sidebarOption' onClick={onClick}>
            {Icon && <Icon className='sidebarOption_icon' />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption
