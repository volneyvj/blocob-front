import React, { Component } from 'react'
import api from '../../utils/api.util'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';


class AddClassifieds extends Component {
    state = {
        userID: localStorage.getItem("user"),
        category: 'Produto',
        subcategory: '',
        // likes: '',
        // dislikes: '',
        title: '',
        neighborhood: '',
        description: '',
        imgURL: 'https://www.inovegas.com.br/site/wp-content/uploads/2017/08/sem-foto.jpg',
        price: '1',
        measure: '',
        delivery: 'false',
        // exclusivos serviços testimonial

        // exclusivos projeto
        motive: '',
        investment: '1',
        filePDF: '',
        address: '',
        desiredDate: '',
        // confirmedUsers: '',
        status: '1',
    }


    loadUser = async () => {
        const id = this.state.userID
        const user = await api.getUsersDetails({ id })
        this.setState({
            neighborhood: user.neighborhood,
        })
    }

    componentDidMount = () => {
        this.loadUser();
    }

    handleInput = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const user = await api.addClassified(this.state);
        this.props.history.push('/main')
    }

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

                            <FormControl style={formControl}>
                                <InputLabel id="catetegory">Categoria</InputLabel>
                                <Select
                                    labelId="category"
                                    id="category"
                                    value={this.state.category}
                                    name="category"
                                    onChange={this.handleInput}
                                >
                                    <MenuItem value="Produto">Produto</MenuItem>
                                    <MenuItem value="Serviço">Serviço</MenuItem>
                                    <MenuItem value="Projeto">Projeto</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="subcategory"
                                label="subcategory"
                                name="subcategory"
                                autoComplete="subcategory"
                                value={this.state.subcategory}
                                autoFocus
                                onChange={this.handleInput}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="neighborhood"
                                label="neighborhood"
                                id="neighborhood"
                                autoComplete="neighborhood"
                                value={this.state.neighborhood}
                                inputProps={
                                    { readOnly: true, }
                                }
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="title"
                                label="title"
                                id="title"
                                autoComplete="title"
                                value={this.state.title}
                                onChange={this.handleInput}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="description"
                                label="description"
                                id="description"
                                autoComplete="description"
                                value={this.state.description}
                                onChange={this.handleInput}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                type="number"
                                required
                                fullWidth
                                name="price"
                                label="price"
                                id="price"
                                autoComplete="price"
                                value={this.state.price}
                                onChange={this.handleInput}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="measure"
                                label="measure"
                                id="measure"
                                autoComplete="measure"
                                value={this.state.measure}
                                onChange={this.handleInput}
                            />

                            <Checkbox
                                checked={this.state.delivery}
                                onChange={this.handleInput}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="motive"
                                label="motive"
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
                                label="investment"
                                id="investment"
                                autoComplete="investment"
                                value={this.state.investment}
                                onChange={this.handleInput}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="filePDF"
                                label="filePDF"
                                id="filePDF"
                                autoComplete="filePDF"
                                value={this.state.filePDF}
                                onChange={this.handleInput}
                            />


                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="address"
                                label="address"
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
                                label="desiredDate"
                                id="desiredDate"
                                autoComplete="desiredDate"
                                value={this.state.desiredDate}
                                onChange={this.handleInput}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="imgURL"
                                label="imgURL"
                                id="imgURL"
                                autoComplete="imgURL"
                                value={this.state.imgURL}
                                onChange={this.handleInput}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={submit}
                                onClick={this.handleSubmit}
                            >
                                Adicionar Classificado
          </Button>
                        </form>
                    </div>
                </Container>

            </div>
        )
    }
}


const paper = {
    marginTop: "8px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const form = {
    width: '100%', // Fix IE 11 issue.
    marginTop: "1px"
}

const submit = {
    margin: "3px"
}

const formControl = {
    margin: "1px",
    minWidth: 120,
}

const selectEmpty = {
    marginTop: "2px"
}




export default AddClassifieds