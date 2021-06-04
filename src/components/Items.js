import React from 'react';

const Item = ({items, item}) => {
    let children = items.map((i, key) => i.parent_id === item.id && <Item key={key} items={items} item={i}/>)
    return (
        <li>
            {item.label}
            <ul>
                {children && children}
            </ul>
        </li>

    );
};

export default Item;