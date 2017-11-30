const React = novi.react.React;
const domUtils = novi.utils.dom;
import LabelEditor from "./LabelEditor";
import LabelSettings from "./LabelSettings";
const Language = novi.language;
const Plugin = {
    name: "novi-plugin-label",
    title: "Novi Label",
    description: "Novi Label description",
    version: "1.0.4",
    dependencies: {
        novi: "0.8.6"
    },
    defaults: {
        querySelector: "label"
    },
    ui: {
        editor: [LabelEditor],
        settings: <LabelSettings />,
    },
    excerpt: domUtils.hasNonEmptyTextNodes,
    onLanguageChange: onLanguageChange
};
function onLanguageChange(plugin){
   let messages = Language.getDataByKey("novi-plugin-label");
   plugin.ui.editor[0].title = messages.editor.title;
   plugin.ui.editor[0].tooltip = messages.editor.tooltip;
   return plugin;
}
novi.plugins.register(Plugin);