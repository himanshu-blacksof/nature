import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import { useState } from 'react';

const Tables = () => {
  const dataSource = [
    {
      key: '1',
      companyname: 'AEP Ohio',
      type: 'Electric',
      state: 'ohio',
      udc: 'opc',
      active: 'yes',
      date: '05/10/2015',
    },
    {
      key: '2',
      companyname: 'AEP Ohio',
      type: 'Electric',
      state: 'ohio',
      udc: 'opc',
      active: 'yes',
      date: '05/10/2015',
    },
    {
      key: '3',
      companyname: 'AEP Ohio',
      type: 'Electric',
      state: 'ohio',
      udc: 'opc',
      active: 'yes',
      date: '05/10/2015',
    },
    {
      key: '4',
      companyname: 'AEP Ohio',
      type: 'Electric',
      state: 'ohio',
      udc: 'opc',
      active: 'yes',
      date: '05/10/2015',
    },
    {
      key: '5',
      companyname: 'AEP Ohio',
      type: 'Electric',
      state: 'ohio',
      udc: 'opc',
      active: 'yes',
      date: '05/10/2015',
    },
  ];

  const columns = [
    {
      title: 'CompanyName',
      dataIndex: 'companyname',
      key: 'companyname',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'UDC Code',
      dataIndex: 'udc',
      key: 'udc',
    },
    {
      title: 'Is Active',
      dataIndex: 'active',
      key: 'active',
    },
    {
      title: 'Last updated At',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => {
        return (
          <>
            <EditOutlined style={{ color: 'green', cursor: 'pointer' }} />
            <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} />
          </>
        );
      },
    },
  ];

  return (
    <>
      <div>
        <Table
          className="items-center justify-center w-9/12 m-auto"
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    </>
  );
};

export default Tables;
