import React from 'react';
import './NavigationMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class NavigationMenu extends React.Component{

    render(){
        return (
            <nav>
                <ul>
                    <li><a href="#"><FontAwesomeIcon icon={["fab", "fa-apple"]} /></a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </nav>
        );
    }
}

export default NavigationMenu;