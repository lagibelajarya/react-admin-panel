import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userRows } from '../../DummyData';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';
import './userlist.scss';

export default function UserList() {
  const [data, setData] = React.useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'avatar',
      headerName: 'User',

      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email' },
    { field: 'status', headerName: 'Status' },
    { field: 'transaction', headerName: 'Transaction' },
    {
      field: 'action',
      headerName: 'Action',
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
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
