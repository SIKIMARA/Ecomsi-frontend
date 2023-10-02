import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Products } from './Products';

export default function Admin() {
    const [page, setPage] = useState('dashboard');

    const Page = (newPage) => {
        setPage(newPage);
    }

   

    return (
        <div className='flex'>
            <Sidebar Page={Page} />
            <div className='m-3'>
           {page === 'dashboard' && <h1>Dashboard</h1>}
            {page === 'oders' && <h1>Orders</h1>}
            {page === 'users' && <h1>Users</h1>}
            {page === 'products' && <Products/>}

          
            
            </div>
        </div>
    );
}
