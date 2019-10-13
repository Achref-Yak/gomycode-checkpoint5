import React from 'react';


function  Profile(params) {

    return(
        <React.Fragment>
                <img src={params.img}/>
                <p>Name : {params.firstname} {params.lastname}</p>
                <p>{params.link}</p>
        </React.Fragment>
       
    );
    
}