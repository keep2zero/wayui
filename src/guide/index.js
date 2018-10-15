import InputView from "./input.vue";
import ButtonView from './button.vue';
import AreaSelectView from "./area-select.vue";
import IconView from "./icon.vue";
import TreeView from "./tree.vue";
import LayoutView from "./layout.vue";
import DialogView from "./dialog.vue";
import CheckboxView from "./checkbox.vue";
import RadioView from "./radio.vue";
import SwitchView from "./switch.vue";
import SliderView from "./slider.vue";
import InputNumberView from "./input-number.vue";
import Scroller from "./scroller.vue";
import DateTime from "./date-time.vue";

export default [
  {
    path: "/input",
    component: InputView
  },
  {
    path: "/button",
    component: ButtonView
  },

  {
    path: "/area",
    component: AreaSelectView
  },

  {
    path: "/icon",
    component: IconView
  },

  {
    path: "/tree",
    component: TreeView
  },

  {
    path: "/layout",
    component: LayoutView
  },

  {
    path: "/dialog",
    component: DialogView
  },

  {
    path: "/checkbox",
    component: CheckboxView
  },

  {
    path: "/radio",
    component: RadioView
  },

  {
    path: "/switch",
    component: SwitchView
  },

  {
    path: "/slider",
    component: SliderView
  },

  {
    path: "/number",
    component: InputNumberView
  },

  {
    path: '/scroller',
    component: Scroller
  },

  {
    path: '/date-time',
    component: DateTime
  }
]