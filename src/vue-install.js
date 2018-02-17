import Vue from "vue";

import Input from "@/components/Input/Input";


export default function Hdui() {}

Hdui.install = function(vue, option) {
     vue.component("HdInput", Input);
}
