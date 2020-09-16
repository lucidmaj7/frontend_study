import React, { Component } from 'react';


class MyBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching : true,
            boardList:[],
            value:'loading..',
        };

    }
    componentDidMount(){
        this.fetchBoardList();
    }
    async fetchBoardList() {
        const response = await fetch('api/values');
        const data = await response.json();
        this.setState({ value: data, isFetching: false });

    }
    static renderBoardList(data) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
            {data.map(data =>
            <tr key="">
              <td>""</td>
              <td>""</td>
              <td>""</td>
              <td>""</td>
            </tr>
          )}
        </tbody>
        </table>
        );
    }
    render() {

        let contents= <h1>loading..</h1>;

        if(this.state.isFetching == false)
        {
            contents= MyBoard.renderBoardList(this.state.boardList);
        }
         return (
            <div className="board-container">
                {contents}
                <div className="board-footer">
                    <button>Write</button>
                </div>
            </div>
        );
    }
}

export default MyBoard;