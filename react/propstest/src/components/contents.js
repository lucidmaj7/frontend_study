import React from 'react';

class Contents extends React.Component{

    render(){
        let data = this.props.data;
        let i = 0;
        let list = [];
        for(let i = 0; i<data.length ;i++)
        {
            
            list.push(<li key={data[i].id} ><a href={ `${data[i].id}`} >{data[i].title}</a></li>);
        }
        return(

            <div className="content-container">
                <h2>{this.props.title}</h2>
                <h3>{this.props.desc}</h3>
                <ul>
                    {list}
                </ul>
            </div>

        );
    }
}

export default Contents;