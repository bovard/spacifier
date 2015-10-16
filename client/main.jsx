/** @jsx React.DOM */
var React = require('react');

var Well = require('react-bootstrap').Well;
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;


var Spacifier = React.createClass({
    getInitialState: function() {
        return {
            "output": "T y p e h e r e ."
        };
    },
    spacify: function() {
        var words = this.refs.input.getValue();
        words = words.split(" ").join("");
        words = words.split("").join(" ")
        this.setState({
            output: words
        });
    },
    render: function() {
        return (
            <div className="content">
                <Well>
                    <Input type="textarea" label="Input" ref="input" placeholder="Type here." />
                    <Button onPress={this.spacify} onClick={this.spacify} type="success">Spacify!</Button>
                    <br />
                    <br />
                    <p>Output:</p>
                    <Well>
                        <p>{this.state.output}</p>
                    </Well>
                </Well>
            </div>
        );
    }
});

React.renderComponent(
    <Spacifier />,
    document.body
);

