import React, { Component } from 'react';

export class Menu extends Component
{
    clickHandler = (data, e) => {
        e.preventDefault();
        this.props.changeData(data);
    }

    render() {
        return <div>
            <a href="/" onClick={(e) => this.clickHandler('light_armor',e )}>Легкая броня</a>
            <a href="/" onClick={(e) => this.clickHandler('heavy_armor',e )}>Тяжелая броня</a>
        </div>
    }
}