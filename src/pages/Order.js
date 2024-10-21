import React , { useState } from 'react'
import Table from '../components/admin/Table';
import { Link } from 'react-router-dom';

const Order = () => {

    const columns = [{
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Quantity",
            accessor: "quantity",
          },
          {
            Header: "Discount",
            accessor: "discount",
          },
          {
            Header: "Amount",
            accessor: "amount",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Action",
            accessor: "action",
          },

        ]; 
    const [rows] = useState([
        {
            id: "6666asdsad8cafasfe",
            amount: 1000,
            quantity: 1,
            discount: 469,
            status: <span className="red">Pending</span>,
            action: <Link to="/order/6666asdsad8cafasfe">View</Link>,
        },
      ]);
    const showPagination = false;  
    const data = React.useMemo(() => rows, [rows]);
  return (
    <div className="order">
      <h1>My Orders</h1>
    {  rows && rows.length >  0 ?  <Table columns={columns} data={data} heading={""} showPagination={showPagination} CCN={"order-table"}/> : <p>No Orders</p> }
      
    </div>
  )

  
}
export default Order
