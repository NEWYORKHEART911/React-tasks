import React, {useState} from 'react';
import styles from './SearchList.css';

function SearchList() {
    const [filter, setFilter] = useState('');

    const items = [
        {id: 1, text: 'Apple'},
        {id: 2, text: 'Banana'},
        {id: 3, text: 'Orange'},
        {id: 4, text: 'Mango'},
        {id: 5, text: 'Pineapple'},
        {id: 6, text: 'Strawberry'},
        {id: 7, text: 'Watermelon'}
    ]

    const filteredItems = items.filter(item =>
        item.text.toLowerCase().includes(filter.toLowerCase())
    )
        

    return(
        <div class="searches">
            <input type="text" 
                placeholder="Search..." 
                onChange={(e)=>setFilter(e.target.value)} />
            <div class="searchItems">
                {filteredItems.map(item => <div key={item.id}>{item.text}</div>)}
            </div>
        </div>
    )
}

export default SearchList;