const React = novi.react.React;
import Trigger from "./editor/Trigger";
import Header from "./editor/Header";
const messages = novi.language.getDataByKey("novi-plugin-label");
const EditorItem = {
    trigger: <Trigger/>,
    tooltip: messages.editor.tooltip,
    closeIcon: "submit",
    header: [<Header/>],
    width: 290,
    title: messages.editor.title
};

export default EditorItem;