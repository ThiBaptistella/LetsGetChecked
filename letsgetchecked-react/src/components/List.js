import React from 'react';

const List = props => (
    <div>
        {
        props.comments.map((item, index) => <div key={index} className="card"><h1>{item}</h1> </div>)
        }
    </div>
);

export default List;