import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PropTypes from 'prop-types';

import {
  Tabla,
  CentrarTabla,
  Titulo,
  Input,
  Container,
  FromContainer,
  FormField,
} from "./NuevaCategoriaStyle";

//datk mode material ui
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../NuevoVideo/theme";
import { UseMode } from "../../mobx/UseMode";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const FormNuevaCategoria = ({
  handleSubmit,
  name,
  description,
  color,
  editMode,
  categories,
  handleNameChange,
  handleDescriptionChange,
  handleColorChange,
  handleEdit,
  handleDelete,
  handleClear,
}) => {
  const { temaMode } = UseMode();
  return (
    <ThemeProvider theme={temaMode ? darkTheme : lightTheme}>
      <Container>
        <FromContainer>
          <Titulo>Nueva Categoría</Titulo>
          <Box component="form" autoComplete="off">
            <CentrarTabla onSubmit={handleSubmit}>
              <TextField
                id="filled-basic"
                label="Nombre"
                variant="filled"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
              <TextField
                id="filled-multiline-static"
                label="Descripción"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="filled"
                value={description}
                onChange={handleDescriptionChange}
              />
              <FormField>
                <Input
                  type="color"
                  value={color}
                  onChange={handleColorChange}
                />
              </FormField>
              <div>
                <Button
                  color="secondary"
                  variant="contained"
                  type="submit"
                  style={{ marginRight: "10px" }}
                >
                  {editMode ? "Actualizar" : "Guardar"}
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  type="button"
                  style={{ marginLeft: "10px" }}
                  onClick={handleClear}
                >
                  Limpiar
                </Button>
              </div>
            </CentrarTabla>
          </Box>
        </FromContainer>

        <Tabla>
          <Titulo>Lista de Categorías</Titulo>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nombre</StyledTableCell>
                  <StyledTableCell>Descripción</StyledTableCell>
                  <StyledTableCell>Editar</StyledTableCell>
                  <StyledTableCell>Eliminar</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.map((category) => (
                  <StyledTableRow key={category.name}>
                    <StyledTableCell>{category.name}</StyledTableCell>
                    <StyledTableCell>{category.description}</StyledTableCell>
                    <StyledTableCell>
                      <Button
                        variant="contained"
                        onClick={() => handleEdit(category)}
                      >
                        Editar
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell>
                      <Button
                        variant="contained"
                        onClick={() => handleDelete(category)}
                      >
                        Eliminar
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Tabla>
      </Container>
    </ThemeProvider>
  );
};
FormNuevaCategoria.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  color:PropTypes.string.isRequired,
  editMode:PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
  editCategoria: PropTypes.array.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  handleColorChange: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired ,
}

export default FormNuevaCategoria;
