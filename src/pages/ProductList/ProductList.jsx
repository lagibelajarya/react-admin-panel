import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { productRows } from '../../DummyData';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';
import './productlist.scss';

export default function ProductList() {
  const [data, setData] = React.useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    {
      headerName: 'Product',
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock' },
    { field: 'status', headerName: 'Status' },
    { field: 'price', headerName: 'Price' },
    {
      field: 'action',
      headerName: 'Action',
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList" style={{ height: '100%', width: '100%' }}>
      <DataGrid rows={data} columns={columns} pageSize={10} autoPageSize={true} checkboxSelection />
    </div>
  );
}
