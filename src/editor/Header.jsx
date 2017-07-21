const Icon = novi.ui.icon;
const Input = novi.ui.input;
const Icons = novi.ui.icons;
const React = novi.react.React;
const Component = novi.react.Component;
const domUtils = novi.utils.dom;

export default class Header extends Component {
    constructor(props) {
        super();
        let textNode = this._getTextNodeFromLabel(props.element);

        this.state = {
            textNode,
            value: textNode.textContent
        };

        this._handleTextChange = this._handleTextChange.bind(this);
        this._getTextNodeFromLabel = this._getTextNodeFromLabel.bind(this);
        this.timer = null;
    }


    render() {
        return (
            <div className="novi-link-tool">
                <Icon>{Icons.ICON_LABEL}</Icon> 
                <div className="link-tool-input-warp" style={{width: 195}}>
                    <Input onChange={this._handleTextChange} value={this.state.value}/>
                </div>
            </div>
        )
    }

    _handleTextChange(e) {
        let value = e.target.value;
        this.setState({
            value
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.state.textNode.textContent = value;
            novi.element.synchronize(this.props.element);
        }, 500);
    }

    _getTextNodeFromLabel(element) {
        let i, childNodes = element.childNodes;

        for (i = 0; i < childNodes.length; i++) {
            if (domUtils.isNonEmptyTextNode(childNodes[i])) {
                return childNodes[i];
            }
        }
    }
}