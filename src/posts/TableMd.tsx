import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableBody,
  Button,
} from "@mui/material";
import { FormEvent } from "react";
import { Link } from "react-router-dom";

const headCell: string[] = ["Title", "Body", "Details", "Update", "Delete"];

interface Props {
  mutate: any;
  posts: [];
}

interface PostProps {
  id: number;
  title: string;
  body: string;
}

const TableMd = ({ mutate, posts }: Props) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 150 }}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox color="primary" />
            </TableCell>
            {headCell.map((item) => (
              <TableCell
                align="center"
                key={item}
                sx={{
                  fontWeight: "bold",
                }}
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {posts?.map((post: PostProps) => (
            <TableRow hover key={post.id}>
              <TableCell padding="checkbox">
                <Checkbox color="primary" />
              </TableCell>
              <TableCell align="center">{post.title}</TableCell>
              <TableCell align="center">{post.body}</TableCell>
              <TableCell align="center">
                <Link to={`${post.id}`}>
                  <Button
                    variant="contained"
                    color="success"
                    className="shadow"
                  >
                    Details
                  </Button>
                </Link>
              </TableCell>
              <TableCell align="center">
                <Link to={`edit/${post.id}`}>
                  <Button
                    variant="contained"
                    color="primary"
                    className="shadow"
                  >
                    Update
                  </Button>
                </Link>
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="error"
                  className="shadow"
                  onClick={(e: FormEvent) => {
                    e.preventDefault();
                    mutate(post.id);
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableMd;
