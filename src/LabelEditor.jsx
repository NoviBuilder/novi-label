const React = novi.react.React;
import Trigger from "./editor/Trigger";
import Header from "./editor/Header";

const EditorItem = {
    trigger: <Trigger/>,
    tooltip: "Edit Label Text",
    closeIcon: "submit",
    header: [<Header/>],
    width: 290,
    title: "Edit Label text"
};

export default EditorItem;