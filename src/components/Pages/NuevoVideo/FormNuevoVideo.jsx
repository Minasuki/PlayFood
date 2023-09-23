import PropTypes from 'prop-types';
import {
  FromBody,
  FromContainer,
  Title3,
  MarginBoton,
  Ingredient,
  VarianteTextField,
  FormField,
  FormButtonContainer,
  FormButton,
  FormButtonClear,
  LiFrom,
  VarianteFormControl,
} from "./NuevoVideoStyle";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import StreamSharpIcon from "@mui/icons-material/StreamSharp";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import './estilos.css'

//dark mode Material ui
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from "./theme";
import { UseMode } from "../../mobx/UseMode";

const FormNuevoVideo = ({
  categories,
  onSubmit,
  onClear,
  strMeal,
  videoLink,
  imageLink,
  selectedCategory,
  instrucciones,
  inputText,
  ingredientes,
  handleTitleChange,
  handleVideoLinkChange,
  handleImageLinkChange,
  handleCategoryChange,
  handleInstruccionesChange,
  handleIngredientesChange,
  handleIngredientesKeyDown,
  handleAddIngrediente,
  handleEliminarIngrediente,
}) => {
  const { temaMode } = UseMode();
  return (
    <ThemeProvider theme={temaMode ? lightTheme : darkTheme}>
    <FromBody>
      <FromContainer>
        <Title3>Nuevo Video</Title3>
        <Box component="form" autoComplete="off" onSubmit={onSubmit}>
          <FormField>
            <TextField
              type="text"
              id="filled-basic"
              name="strMeal"
              value={strMeal}
              label="Titulo del Video"
              variant="filled"
              onChange={handleTitleChange}
              className="dark-mode-textfield" // Agrega una clase personalizada
            />
          </FormField>

          <FormField>
            <TextField
              type="text"
              id="filled-basic"
              name="videoLink"
              label="Link del Video"
              variant="filled"
              value={videoLink}
              onChange={handleVideoLinkChange}
              className="form-input"
            />
          </FormField>

          <FormField>
            <TextField
              type="text"
              id="filled-basic"
              name="imageLink"
              label="Link Imagen del video"
              variant="filled"
              value={imageLink}
              onChange={handleImageLinkChange}
              className="form-input"
            />
          </FormField>

          <FormField>
            <FormControl   style={VarianteFormControl} fullWidth variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                {"Seleccionar Categoria"}
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                name="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                label={selectedCategory}
              
              >
                <MenuItem value="">
                  <em>Seleccionar Categoria:</em>
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </FormField>

          <FormField>
            <TextField
              id="filled-multiline-static"
              label="Intrucciones"
              name="instrucciones"
              multiline
              size="medium"
              rows={4}
              value={instrucciones}
              defaultValue="Default Value"
              variant="filled"
              onChange={handleInstruccionesChange}
              className="form-textarea"
            />
          </FormField>

          <FormField>
            <Ingredient>
              <TextField
                type="text"
                id="filled-basic"
                name="ingredientes"
                label="Agregar ingredientes"
                variant="filled"
                className="form-input"
                style={VarianteTextField}
                value={inputText}
                fullWidth
                onChange={handleIngredientesChange}
                onKeyDown={handleIngredientesKeyDown} // Maneja la pulsación de Enter
              />
              <Button
                color="secondary"
                type="button"
                variant="outlined"
                style={MarginBoton}
                onClick={handleAddIngrediente}
              >
                Agregar
              </Button>
            </Ingredient>
            <List>
              {ingredientes.map((ingrediente, index) => (
                <ListItem key={index}>
                  <LiFrom>
                    <StreamSharpIcon />
                    <ListItemText primary={ingrediente} style={MarginBoton} />
                    <IconButton
                      color="secondary"
                      onClick={() => handleEliminarIngrediente(index)}
                    >
                      <DeleteOutlineIcon /> {/* Icono de eliminación */}
                    </IconButton>
                  </LiFrom>
                </ListItem>
              ))}
            </List>
          </FormField>

          <FormButtonContainer>
            <div className="botonProncipal">
              <FormButton type="submit">Guardar</FormButton>
              <FormButtonClear
                type="button"
                onClick={onClear}
                style={MarginBoton}
              >
                Limpiar
              </FormButtonClear>
            </div>
            <div className="botonNuevo">
              <Link to="/new-category" className="buton__new__category">
                <FormButton type="buttom">Nueva Categoria</FormButton>
              </Link>
            </div>
          </FormButtonContainer>
        </Box>
      </FromContainer>
    </FromBody>
    </ThemeProvider>
  );
};

FormNuevoVideo.propTypes = {
  categories: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onAddIngrediente: PropTypes.func.isRequired,
  strMeal: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  instrucciones: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  ingredientes: PropTypes.array.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleVideoLinkChange: PropTypes.func.isRequired,
  handleEliminarIngrediente: PropTypes.func.isRequired,
  handleCategoryChange:PropTypes.func.isRequired,
  handleInstruccionesChange:PropTypes.func.isRequired,
  handleIngredientesChange:PropTypes.func.isRequired,
  handleIngredientesKeyDown:PropTypes.func.isRequired,
  handleAddIngrediente:PropTypes.func.isRequired,
  handleImageLinkChange:PropTypes.func.isRequired,
};


export default FormNuevoVideo;
