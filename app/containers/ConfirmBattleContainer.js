var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle')

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        console.log('Get initial state!');
        return {
            isLoading: true,
            playersInfo: []
        }
    },
    componentWillMount: function () {
        console.log('Component will mount!')
    },
    componentDidMount: function () {
        var query = this.props.location.query;
        // TODO: fetch info from github than update the state
        console.log('Component did mount!')
    },
    componentWillReceiveProps: function () {
        console.log('Component will receive props!')
    },
    componentWillUnmount: function () {
        console.log('Component will unmount!')
    },
    render: function () {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo} />
        )
    }
});

module.exports = ConfirmBattleContainer;