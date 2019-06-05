import React, { useEffect, useState } from 'react'
import Config from '../app/config'

export const DropdownCompanySelect = () => {

    const [companies, setCompanies] = useState([]);

    const getCompanies = async () => {
        const storageUserToken  = localStorage.getItem('userToken');
        
        await fetch(Config.api.url + '/api/companies', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + storageUserToken
            },
        })
        .then((response) => {
            return response.json();
        })
        .then((companies) => {
            setCompanies(companies.data);
            console.log(companies);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        getCompanies();
    }, []);

    return (
        <h1>Dropdown Company Select</h1>
    )
}

export default DropdownCompanySelect