import React, { Component } from 'react';


import './form.css';


export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            operation: '',
            resultadoFinal: '',
            Style: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setMyOperator = this.setMyOperator.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value, });

    }

    setMyOperator(event) {
        this.setState({ operation: event.target.value });
    }

    handleSubmit(event) {

        //console.log('My Number: ' || this.state.value);
        //console.log('My Numeric Base: ' || this.state.operation);

        this.calc(this.state.value, this.state.operation);

        event.preventDefault();
    }

    calc(event, operation) {
        //console.log('Im in')
        //console.log("Valor de event:", event)

        if (event === '') {
            this.setState({ resultadoFinal: 'Please, type a number', Style: 'MyResultNegativo' })

        } else {

            if (operation === 'binary') {
                const answer = Number(event).toString(2)
                this.setState({ resultadoFinal: answer, Style: 'MyResult' })
                //  console.log(answer)
            }

            if (operation === 'decimal') {
                //MELHORAR LÓGICA OU CRIAR UMA FUNÇÃO
                if (event.indexOf(2) > -1) {
                    this.setState({ resultadoFinal: 'The number informed is not binary', Style: 'MyResultNegativo' })
                } else if (event.indexOf(3) > -1) {
                    this.setState({ resultadoFinal: 'The number informed is not binary', Style: 'MyResultNegativo' })
                } else if (event.indexOf(4) > -1) {
                    this.setState({ resultadoFinal: 'The number informed is not binary', Style: 'MyResultNegativo' })
                } else if (event.indexOf(5) > -1) {
                    this.setState({ resultadoFinal: 'The number informed is not binary', Style: 'MyResultNegativo' })
                } else if (event.indexOf(6) > -1) {
                    this.setState({ resultadoFinal: 'The number informed is not binary', Style: 'MyResultNegativo' })
                } else if (event.indexOf(7) > -1) {
                    this.setState({ resultadoFinal: 'The number informed is not binary', Style: 'MyResultNegativo' })
                } else if (event.indexOf(8) > -1) {
                    this.setState({ resultadoFinal: 'The number informed is not binary', Style: 'MyResultNegativo' })
                } else if (event.indexOf(9) > -1) {
                    this.setState({ resultadoFinal: 'The number informed is not binary', Style: 'MyResultNegativo' })
                } else {
                    //console.log("é binario:", event)

                    //IS A BINARY NUMBER

                    const answer = parseInt(event, 2)
                    this.setState({ resultadoFinal: answer, Style: 'MyResult' })
                }

            }
        }
    }


    render() {
        return (
            <form className="myform" onSubmit={this.handleSubmit}><h3>Decimal / Binary convertion</h3><br></br><br></br>

                <label>Type a Number
                    <input type="text" id='inputtext' onChange={this.handleChange} />
                </label><br />


                <div onChange={this.setMyOperator}><br />
                    <input type="radio" value="decimal" name="operator" required /> Decimal  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" value="binary" name="operator" required />  Binary
                </div>


                <br /><br />

                <div id="result">
                    <input type='submit' id='resultButton' value='Generate' /><br /><br />

                    <div id={this.state.Style}>
                        <h4>{this.state.resultadoFinal}</h4>
                    </div>
                </div>


            </form>
        )

    };;
}
