import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';


class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="">
                        <div className="">
                            <div className="">
                                <h5 className="">BLOCO B</h5>
                                <p className="">Seu Bairro é seu</p>
                            </div>
                            <div className="">
                                <ul className="">
                                    <li><Link to='/'>Facebook </Link></li>
                                    <li><Link to='/'>Linkedin </Link></li>
                                    <li><Link to='/'>Instagram </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            © 2021 Copyright Text
        <a className="" href="#!">More Links</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

    export default Footer