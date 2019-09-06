import React from 'react';
import PlayerData from './playerData';
import axios from 'axios';

//  console.log(Object.entries(data));

// class Players extends React.Component{
//     componentDidMount(){
//         axios.get('http://localhost:5000/api/players')
//         .then((response) => {
//             return(
//                 console.log(response)
//             )
//         })
//         .catch(error => {
//             console.error('oops', error)
//         });
//     }

//     render (){
//         return <>
//             <div>Hello</div>
//         </>
//     }
    
    



// }

class Players extends React.Component{
    constructor(){
        super();
        this.state={
            playerData: {},

        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/api/players')
                .then((response) => {
                    this.setState({
                        playerData: response.data
                    });
                })
                .catch(err => console.log(err));

    }

    render(){
        return(
            <div>
                <h1>Soccer</h1>
                <PlayerData player={this.state.playerData}/>
                <div>{console.log(this.state.PlayerData)}</div>

            </div>
        )
    }
}
export default Players;