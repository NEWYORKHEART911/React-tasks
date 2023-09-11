import React, {useState, useEffect} from 'react';
import APIservice from '../service/APIservice';
import styles from './PublicAPI.css';

function PublicAPI() {

    const [data, setData] = useState([]);

    //useEffect hook used to make the GET request and update the component's state 
    //when data is fetched
    useEffect(() => {
        APIservice.getApiData().then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.error('An error occurred fetching the data', error);
        })
    }, [])

    return(
        <div class="apiCont">
            <h2>Posts from Public API</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            Body
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td id="apititle">{item.title}</td>
                            <td id="apibody">{item.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PublicAPI;