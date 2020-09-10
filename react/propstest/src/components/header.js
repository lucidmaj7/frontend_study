import React from 'react';

class MyHeader extends React.Component{
   
    render(){
        return(
            <header className="header">
                <h1 className="header-title">
                    <a href={this.props.tolink} onClick={this.props.clickEvent} >
                        {this.props.title}
                    </a>
                </h1>
                <h2 className="header-sub-title">{this.props.subtitle}</h2>
                <p class="header-desc">{this.props.desc}</p>
            </header>
        );
    }


}

export default MyHeader;