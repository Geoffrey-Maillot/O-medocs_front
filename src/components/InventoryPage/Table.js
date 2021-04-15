import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Nom', minWidth: 300 },
  { id: 'cis', label: 'CIS', minWidth: 100 },
  {
    id: 'expirationDate',
    label: 'Date limite de consommation',
    minWidth: 200,
  },
  { id: 'pathology', label: 'Pathologie', minWidth: 200 },
  { id: 'quantity', label: 'Quantité', minWidth: 200 },
  { id: 'price', label: 'Prix H.T', minWidth: 200 },
];

function createData(name, cis, expirationDate, pathology, quantity, price) {
  return {
    name,
    cis,
    expirationDate,
    pathology,
    quantity,
    price,
  };
}

const rows = [
  createData('Pharmacie centrale', 'Bourgogne Franche-Comté'),
  createData('Pharmacie de la gare', 'Île-de-France'),
  createData('Pharmacie Lyon Saxe ', 'Bretagne'),
  createData('Pharmacie centrale', 'Bourgogne Franche-Comté'),
  createData('Pharmacie de la gare', 'Île-de-France'),
  createData('Pharmacie Lyon Saxe ', 'Bretagne'),
  createData('Pharmacie centrale', 'Bourgogne Franche-Comté'),
  createData('Pharmacie de la gare', 'Île-de-France'),
  createData('Pharmacie Lyon Saxe ', 'Bretagne'),
  createData('Pharmacie centrale', 'Bourgogne Franche-Comté'),
  createData('Pharmacie de la gare', 'Île-de-France'),
  createData('Pharmacie Lyon Saxe ', 'Bretagne'),
  createData('Pharmacie centrale', 'Bourgogne Franche-Comté'),
  createData('Pharmacie de la gare', 'Île-de-France'),
  createData('Pharmacie Lyon Saxe ', 'Bretagne'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 600,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, { value: -1, label: 'Tous' }]}
        labelRowsPerPage="Résultats par page"
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
