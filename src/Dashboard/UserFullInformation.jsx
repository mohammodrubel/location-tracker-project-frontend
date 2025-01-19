import React from 'react'
import { useGetSingleUserLocationQuery } from '../app/fetchers/location/locationApi'
import { useParams } from 'react-router-dom'
import { Table } from 'antd'

function UserFullInformation() {
    const params = useParams()
    const id = params.id
    const { data } = useGetSingleUserLocationQuery(id)
    const mainData = data?.data
    const columns = [
        {
            title: "Name",
            dataIndex: ["user", "name"],
            key: "userName",
            responsive: ['xs', 'sm'], // This will hide it on smaller screens
        },
        {
            title: 'Email',
            dataIndex: ['user', 'email'],
            key: 'userEmail',
            responsive: ['xs', 'sm'],
        },
        {
            title: 'Role',
            dataIndex: ['user', 'role'],
            key: 'userRole',
            responsive: ['xs', 'sm'],
        },
        {
            title: 'Latitude',
            dataIndex: 'latitude',
            key: 'latitude',
            responsive: ['xs', 'sm'],
        },
        {
            title: 'Longitude',
            dataIndex: 'longitude',
            key: 'longitude',
            responsive: ['xs', 'sm'],
        },
        {
            title: 'Country',
            dataIndex: ['address', 'country'],
            key: 'country',
            responsive: ['xs', 'sm'],
        },
        {
            title: 'State',
            dataIndex: ['address', 'state'],
            key: 'state',
            responsive: ['xs', 'sm'],
        },
        {
            title: 'District',
            dataIndex: ['address', 'state_district'],
            key: 'district',
            responsive: ['xs', 'sm'],
        },
        {
            title: 'County',
            dataIndex: ['address', 'county'],
            key: 'county',
            responsive: ['xs', 'sm'],
        },
        {
            title: 'Created Time',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => new Date(text).toLocaleTimeString(),
            responsive: ['xs', 'sm'],
        },
    ];
    

    return (
        <div className="table-container">
        <Table
            columns={columns}
            dataSource={mainData}
            pagination={false} 
            scroll={{ x: 'max-content' }} 
            className="responsive-table"
        />
        
    </div>
    )
}

export default UserFullInformation