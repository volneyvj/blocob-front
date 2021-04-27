import React, { Component } from "react";
import api from "../../utils/api.util";
import '../../App.css'
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import { ToggleButton } from "@material-ui/lab";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import FormControlLabel from '@material-ui/core/FormControlLabel';



const stylebutton = {
  variant: "contained",
  name: "category",
  value: "Produto",
}

class AddClassifieds extends Component {
  state = {
    userID: localStorage.getItem("user"),
    category: "Produto",
    subcategory: "",
    // likes: '',
    // dislikes: '',
    title: "",
    neighborhood: "",
    description: "",
    imgURL:
      "https://www.inovegas.com.br/site/wp-content/uploads/2017/08/sem-foto.jpg", //mudar cloudinary
    price: "1",
    measure: "",
    delivery: "false",
    // exclusivos serviços testimonial

    // exclusivos projeto
    motive: "",
    investment: "1",
    filePDF: "",
    address: "",
    desiredDate: "",
    // confirmedUsers: '',
    status: "1",
    color: "primary",
  };

  loadUser = async () => {
    const id = this.state.userID;
    const user = await api.getUsersDetails({ id });
    this.setState({
      neighborhood: user.neighborhood,
    });
  };

  componentDidMount = () => {
    this.loadUser();
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };



  handleAlignment = (event, newAlignment) => {
    this.setState(
      { category: newAlignment });
  };

  handleFile = (e) => {
    this.setState({ imgURL: e.target.files[0] });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('userID', this.state.userID);
    formData.append('category', this.state.category);
    formData.append('subcategory', this.state.subcategory);
    formData.append('title', this.state.title);
    formData.append('neighborhood', this.state.neighborhood);
    formData.append('description', this.state.description);
    formData.append('imgURL', this.state.imgURL);
    formData.append('price', this.state.price);
    formData.append('measure', this.state.measure);
    formData.append('delivery', this.state.delivery);
    formData.append('motive', this.state.motive);
    formData.append('investment', this.state.investment);
    formData.append('filePDF', this.state.filePDF);
    formData.append('address', this.state.address);
    formData.append('desiredDate', this.state.desiredDate);
    formData.append('status', this.state.status);

    const classified = await api.addClassified(formData);
    this.props.history.push("/main");

  };

  render() {
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div style={paper}>
            <Typography component="h1" variant="h5">
              Adicionar Classificado
            </Typography>
            <form style={form} noValidate>


              <ToggleButtonGroup

                value={this.state.category}
                exclusive
                onChange={this.handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton style={toggle} value="Produto" aria-label="left aligned">
                  Produto
      </ToggleButton>
                <ToggleButton value="Serviço" aria-label="centered">
                  Serviço
      </ToggleButton>
                <ToggleButton value="Projeto" aria-label="right aligned">
                  Projeto
      </ToggleButton>
              </ToggleButtonGroup>


              <TextField
                required
                fullWidth
                id="subcategory"
                label="SubCategoria"
                name="subcategory"
                autoComplete="subcategory"
                value={this.state.subcategory}
                onChange={this.handleInput}
              />
              <TextField
                margin="normal"
                fullWidth
                name="neighborhood"
                id="neighborhood"
                autoComplete="neighborhood"
                value={this.state.neighborhood}
                inputProps={{ readOnly: true }}
              />

              <TextField
                required
                fullWidth
                name="title"
                label="Título"
                id="title"
                autoComplete="title"
                value={this.state.title}
                onChange={this.handleInput}
              />

              <TextField
                required
                fullWidth
                name="description"
                label="Descrição"
                id="description"
                autoComplete="description"
                value={this.state.description}
                onChange={this.handleInput}
              />
              <TextField
                type="number"
                required
                fullWidth
                name="price"
                label="Preço em R$"
                id="price"
                autoComplete="price"
                value={this.state.price}
                onChange={this.handleInput}
              />

              <TextField
                required
                fullWidth
                name="measure"
                label="Medida (exemplo: kg, peça, unidade, hora...)"
                id="measure"
                autoComplete="measure"
                value={this.state.measure}
                onChange={this.handleInput}
              />



              {this.state.category === "Projeto" ? (
                <>
                  <TextField
                    required
                    fullWidth
                    name="motive"
                    label="Motivo do Projeto"
                    id="motive"
                    autoComplete="motive"
                    value={this.state.motive}
                    onChange={this.handleInput}
                  />

                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="investment"
                    label="Investimento Previsto em R$"
                    id="investment"
                    autoComplete="investment"
                    value={this.state.investment}
                    onChange={this.handleInput}
                  />
                <label>Arquivo PDF +detalhes</label>
              <input type='file' name="filePDF" id="filePDF" onChange={this.handleFile} />


                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="address"
                    label="Local do Projeto"
                    id="address"
                    autoComplete="address"
                    value={this.state.address}
                    onChange={this.handleInput}
                  />

                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="desiredDate"
                    label="Data Desejada"
                    id="desiredDate"
                    autoComplete="desiredDate"
                    value={this.state.desiredDate}
                    onChange={this.handleInput}
                  />
                </>
              ) : (
                <div>
                
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.delivery}
                    onChange={this.handleInput}
                    name="delivery"
                    color="secondary"
                  />
                }
                label="Frete incluso?"
              />
                </div>
              )}
              <label>Imagem</label> 
              <input type='file' name="imgURL" id="imgURL" onChange={this.handleFile} />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={submit}
                onClick={this.handleSubmit}
              >
                Adicionar Classificado
              </Button>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

const paper = {
  marginTop: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const form = {
  width: "100%", // Fix IE 11 issue.
  marginTop: "1px",
};

const submit = {
  margin: "3px",
  background: "#2A4654",
  color: "white"
};

const formControl = {
  margin: "1px",
  minWidth: 120,
};

const selectEmpty = {
  marginTop: "2px",
};

const toggle = {
  color: "primary",
  background: "primary"
}


export default AddClassifieds;
