import React from 'react'


const card = ({id, name, email}) => {
        return (
            <div className ="tc bg-light-green dib br3 pa3 grow ma2 bw2 shadow-5 ">
                <div>
                    <img alt="robo" src={`https://robohash.org/${id}?size=200x200`}/>
                </div>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
}


export default card;