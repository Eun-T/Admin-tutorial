import React from 'react'
import './userList.css'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const UserList = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
  ];
  
  const rows = [
    { id: 1, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", email: "hon@gmail.com", status: "active", transaction: "$120.00"},
    { id: 2, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", email: "hon@gmail.com", status: "active", transaction: "$120.00"},
    { id: 3, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", email: "hon@gmail.com", status: "active", transaction: "$120.00"},
    { id: 4, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", email: "hon@gmail.com", status: "active", transaction: "$120.00"},
    { id: 5, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", email: "hon@gmail.com", status: "active", transaction: "$120.00"},
    { id: 6, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", email: "hon@gmail.com", status: "active", transaction: "$120.00"},
    { id: 7, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", email: "hon@gmail.com", status: "active", transaction: "$120.00"},
    { id: 8, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", email: "hon@gmail.com", status: "active", transaction: "$120.00"},
    { id: 9, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", email: "hon@gmail.com", status: "active", transaction: "$120.00"},
    { id: 10, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", email: "hon@gmail.com", status: "active", transaction: "$120.00"},
  ];
  

  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList