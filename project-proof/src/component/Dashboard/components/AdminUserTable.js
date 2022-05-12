import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  { field: '_id', headerName: 'UserID', width: 240 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'role', headerName: 'Role', width: 200 },

];

// const rows = [
//   { id: 1, email: 'Snow', role: 'Jon', age: 35 },
//     {users.map((a))}
// ];


function AdminUserTable() {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4500/user").then((res) => 
    setTableData((res.data)))

  }, [])

  console.log(tableData)
    


  return (
      <div>
          <hr/>
      <center>
    <div style={{ height: 450, width: '70%' }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={tableData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div></center>
    </div>
  );
}

export default AdminUserTable;