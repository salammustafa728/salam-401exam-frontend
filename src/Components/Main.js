import axios from 'axios'
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


export class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allData: '',
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
    addFav = async(i)=>{
      await axios.post('http://localhost:8080/createData').then(res=>{
        this.setState({
            allData: res.data
        })
      }).catch(error=>console.log(error));
     
    }

    render() {
        return (
            <div>
                {this.state.msg && <p>{this.state.msg}</p>}
                :
                {this.state.allData.map((item, i) => {
                    return(
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.strDrinkThumb} />
                        <Card.Body>
                            <Card.Title>{item.strDrink}</Card.Title>
                           
                            <Button variant="primary" onClick={()=>this.addFav(i)}></Button>
                        </Card.Body>
                    </Card>

                </div>
                )

                } )}

            </div>
        )
    }
}

export default Main
