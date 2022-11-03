import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
// import { useState } from 'react';

const Tables = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  //   const datas = [
  //     {
  //       CompanyName: 'AEP Ohio',
  //       type: 'electric',
  //       state: 'ohio',
  //       udc: 'opc',
  //       active: 'yes',
  //       date: '05/10/2015',
  //     },
  //     {
  //       CompanyName: 'AEP Ohio',
  //       type: 'electric',
  //       state: 'ohio',
  //       udc: 'opc',
  //       active: 'yes',
  //       date: '05/10/2015',
  //     },
  //     {
  //       CompanyName: 'AEP Ohio',
  //       type: 'electric',
  //       state: 'ohio',
  //       udc: 'opc',
  //       active: 'yes',
  //       date: '05/10/2015',
  //     },
  //     {
  //       CompanyName: 'AEP Ohio',
  //       type: 'electric',
  //       state: 'ohio',
  //       udc: 'opc',
  //       active: 'yes',
  //       date: '05/10/2015',
  //     },
  //     {
  //       CompanyName: 'AEP Ohio',
  //       type: 'electric',
  //       state: 'ohio',
  //       udc: 'opc',
  //       active: 'yes',
  //       date: '05/10/2015',
  //     },
  //     {
  //       CompanyName: 'AEP Ohio',
  //       type: 'electric',
  //       state: 'ohio',
  //       udc: 'opc',
  //       active: 'yes',
  //       date: '05/10/2015',
  //     },
  //   ];
  return (
    <>
      {/* <div className="border-2 border-gray-400 w-[80%] m-auto items-center justify-center ">
        <table className="border-2 border-black items-center justify-center ">
          <tr>
            <th className="border-black">Company Name</th>
            <th>Type </th>
            <th>State</th>
            <th>UDC Code</th>
            <th>Is Active</th>
            <th>Last updated At </th>
            <th>Action</th>
          </tr>
          {datas.map((data, index) => (
            <tr key={index}>
              <td>{data.CompanyName}</td>
              <td>{data.type}</td>
              <td>{data.state}</td>
              <td>{data.udc}</td>
              <td>{data.active}</td>
              <td>{data.date}</td>
              <td></td>
            </tr>
          ))}
        </table>
      </div> */}
      <div>
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </>
  );
};

export default Tables;
