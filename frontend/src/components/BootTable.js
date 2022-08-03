import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function BootTable() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/table');
        const items = await data.json();
        setItems(items);
    };

    return (
        <section>
            Rental Prices across the U.S.
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Message</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    items.map(item => (
                        <tr>
                            <td>{item.ID}</td>
                            <td>{item.name}</td>
                            <td>{item.msg}</td>
                            <td>{item.username}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </section>
    );
}

export default BootTable;