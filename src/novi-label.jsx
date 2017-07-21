const React = novi.react.React;
const domUtils = novi.utils.dom;
import LabelEditor from "./LabelEditor";
import LabelSettings from "./LabelSettings";

const Plugin = {
    name: "novi-plugin-label",
    title: "Novi Label",
    description: "Novi Label description",
    version: "1.0.2",
    dependencies: {
    },
    defaults: {
        querySelector: "label"
    },
    ui: {
        editor: [LabelEditor],
        settings: <LabelSettings />,
    },
    excerpt: domUtils.hasNonEmptyTextNodes
};

novi.plugins.register(Plugin);