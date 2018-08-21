import {isUndefined, isTrue, isTrueNotStr, isType, isSimpleType} from "@/utils/judge"
 

const HOOK = ['data', 'props', 'propsData', 'computed', 'methods',
    'watch', 'el', 'template', 'render', 'renderError',
    'staticRenderFns', 'beforeCreate', 'created', 'beforeDestroy', 'destroyed',
    'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'activated', 'deactivated',
    'errorCaptured', 'directives', 'components', 'transitions', 'filters', 'provide',
    'inject', 'model', 'parent', 'mixins', 'name', 'extends', 'delimiters', 'comments', 'inheritAttrs'
]


/**
 * @file
 * Component为组件的基本类
 * 
 * 变量约定: _ 下划线开头的变量为 data的属性, 否则就是props属性
 * @date 2018-08-21
 * @author towaywu@gmail.com
 */

/**
 * @class
 */
export default class Component {
    static toComponent() {
        const _this =new this();
        _this.instance();
        console.log(_this)
        return _this;
    }
    constructor(options) {
        this.render = this.render;
        this.$slots = {};
        this.instance.call(this);
    }

    instance() {
        const attr = new AttrTemplate(this);
        attr.build();
        this.data = () => {
            return attr.data;
        }
        this.props = attr.props;
    }

    render(h) {
        return h('')
    }
}



/**
 * @class 处理属性
 * @author towaywu
 * @date 2018-08-21
 */
class AttrTemplate {
    constructor(object) {
        this.object = object;
        this.props = Object.create(null);
        this.data = Object.create(null);
    }

    build() {
        for (let k in this.object) {
            this.buildProps(k);
            this.buildData(k);
        }

        return this;
    }

    buildProps(k) {
        const prefix = k[0];
        const value = this.object[k];
        
        if (HOOK.indexOf(k) === -1 && prefix !== '_' && prefix !== '$') {
            if(isTrueNotStr(value)){
                if(isType(value, Object) && value.hasOwnProperty('type')) { //是否是props定义的类型
                  this.props[k] = value;
                } else {
                    this.props[k] = {
                        type: (value).constructor,
                        default: isSimpleType(value)? value : (()=> value) //如果是对象则需要设定为一个函数
                    };
                }
               
            }
        }

    }

    buildData(k) {
        const prefix = k[0];
        if (HOOK.indexOf(k) === -1 && isTrue(this.object.props) && !isUndefined(this.object.props[k]) && prefix === '_') {
            this.data[k] = this.object[k];
        }
    }
}
