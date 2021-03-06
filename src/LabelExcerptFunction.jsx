const React = novi.react.React;
const Component = novi.react.Component;
const Input = novi.ui.input;
const Button = novi.ui.button;

export default class LinkSettings extends Component {
    constructor(props) {
        super();
        this.state = {
            settings: props.settings
        };
        this.saveSettings = this.saveSettings.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(props){
        this.setState({
            settings: props.settings
        })
    }

    render() {
        return (
            <div>
                <span style={{letterSpacing: "0,0462em"}}>Label Plugin</span>
                <div style={{fontSize: 13, color: "#6E778A", marginTop: 21}}>Apply this plugin to elements which are matching selector:</div>
                    <Input style={{marginTop: 10, width: 340}} value={this.state.settings.querySelector} onChange={this.onChange}/>
                <div style={{marginTop: 30}}>
                <Button type="primary"  messages={{textContent: "Save Settings"}} onClick={this.saveSettings} />
                </div>
            </div>
        );
    }

    onChange(e){
        const value = e.target.value;
        this.setState({
            settings: {
                querySelector: value
            }
        })
    }

    saveSettings(){
        novi.plugins.settings.update("novi-plugin-label", this.state.settings);
    }
}