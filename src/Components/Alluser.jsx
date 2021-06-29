import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  Button,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { GetUsers,deleteUser} from "../Service/api";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      background: "#000000",
      color: "#ffffff",
      fontSize: "20px",
    },
    row: {
      "& > *": {
        fontSize: "20px",
      },
    },
  },
});
const AllUser = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyle();

  useEffect(() => {
    GetAllUsers();
  }, []);
  const GetAllUsers = async () => {
    const response = await GetUsers();
    console.log(response.data);
    setUsers(response.data);
  };

  const deleteUserData =async (id)=>{
    await deleteUser(id);
    GetAllUsers();
  }

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id </TableCell>
          <TableCell>Name </TableCell>
          <TableCell>Username </TableCell>
          <TableCell>Email </TableCell>
          <TableCell>Phone </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow className={classes.row} key={ user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: 10 }} component={Link}
                to={`/edit/${user.id}`}
              >
                Edit
              </Button>
              <Button variant="contained" color="secondary" onClick={()=>deleteUserData(user.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default AllUser;
