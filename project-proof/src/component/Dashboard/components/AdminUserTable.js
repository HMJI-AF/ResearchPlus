import { useEffect,useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

axios.get("http://localhost:4500/user").then((res)=>{
    const users = res.data
    console.log(users)
    }).catch((err)=>{
    alert(err.message)
})

const columns = [
  { field: 'id', headerName: 'UserID', width: 200 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'role', headerName: 'Role', width: 200 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
];

const rows = [
  { id: 1, email: 'Snow', role: 'Jon', age: 35 },
//   {{users.map((user)=>{}
      

// }
//   }
];


function AdminUserTable() {

  return (
      <center>
    <div style={{ height: 400, width: '70%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div></center>
  );
}

export default AdminUserTable;