import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

export class Fav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favData: '',
            show: false,
            msg: '',
            showmsg: false
        }
    }

    componentDidCatch = async () => {
        await axios.get('http://localhost:8080/allData').then(res => {
            this.setState({
                allData: res.data,
                show: true
            })
        })
    }

    createFav = async () => {
        await axios.post('http://localhost:8080/allData').then(res => {
            this.setState({
                allData: res.data,
                show: true
            })
        })
    }

    deleteFav = async (i) => {

        await axios.remove('http://localhost:8080/deleteData/strDrink', { strDrink: strDrink }).then(res => {
            this.setState({
                favData: res.data
            })
        }).catch(error => console.log(error))
    }

    showModel = () => { this.setState({ show: true }) }
    closeModal = () => { this.setState({ show: true }) }


    updateFav = async (e) => {
        e.preventDefault();
        let strDrink = e.target.strDrink.value;
        await axios.remove('http://localhost:8080/updateData/strDrink', { strDrink: strDrink }).then(res => {
            this.setState({
                favData: res.data
            })
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                {this.state.msg && <p>{this.state.msg}</p>}
                :
               
                   
                        <div>
                            <Modal.Dialog>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <Form onSubmit={this.updateFav}>
                                        <Form.Group className="mb-3" controlId="strDrink">
                                            <Form.Label>strDrink</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted"> 
                                            </Form.Text>
                                        </Form.Group>
                                        </Form>
                                </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.closeModal}>Close</Button>
                                        <Button variant="primary">Save changes</Button>
                                        <Button variant="secondary" onClick={(e)=>this.deleteFav(e)}>deleteData</Button>
                                    </Modal.Footer>
                            </Modal.Dialog>
                        </div>
                        

            
                        </div>
                    )
                }
}

                export default Fav
