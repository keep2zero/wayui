import Vue from "vue";

import Input from "@/components/Input/Input";
import Tree from '@/components/Tree';
import Icon from '@/components/Icon';


export default function Hdui() {}

Hdui.install = function(vue, option) {
  vue.component("HdInput", Input);
  vue.component('HdTree', Tree);
  vue.component('HdIcon', Icon);
}
