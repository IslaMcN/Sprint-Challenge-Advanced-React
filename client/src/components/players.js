import React from 'react';

import axios from 'axios';

//  console.log(Object.entries(data));

class Players extends React.Component{
    componentDidMount(){
        axios.get('http://localhost:5000/api/players')
        .then((response) => {
            return(
                console.log(response)
            )
        })
        .catch(error => {
            console.error('oops', error)
        });
    }

    render (){
        return <>
            <div>Hello</div>
        </>
    }
    
    



}

export default Players;