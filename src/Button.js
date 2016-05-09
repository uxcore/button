import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const sizeMap = {
        small: 'sm',
        medium: '',
        large: 'lg'
    },
    typeMap = {
        primary: 'primary',
        secondary: 'secondary',
        outline: 'outline',
        disabled: 'disabled'
    },
    clsPrefix = 'kuma-button';


class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let props = this.props;
        let type = props.disabled ? 'disabled' : props.type;
        let clsObj = {};
        if (props.className) {
            clsObj[props.className] = true;
        }
        if (sizeMap[props.size]) {
            clsObj[`${clsPrefix}-${sizeMap[props.size]}`] = true;
        }
        let className = classnames(clsPrefix, `${clsPrefix}-${typeMap[type]}`, clsObj);
        var propEvents = {};
        Object.keys(props).forEach((key) => {
            if (key.indexOf('on') === 0) {
                propEvents[key] = props[key];
            }
        });
        return (
            <button className={className} disabled={props.disabled} style={props.style} {...propEvents}>
              {props.children}
            </button>
        );
    }
}
Button.displayName = 'uxcore-button';
Button.propTypes = {
    /**
     * @title 尺寸
     */
    size: React.PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * @title 样式
     */
    style: React.PropTypes.object,
     /**
     * @title 类型
     */
    type: React.PropTypes.oneOf(['primary', 'secondary', 'outline', 'disabled']),
    /**
     * @title 是否禁用
     * @veIgnore
     */
    disabled: React.PropTypes.bool,
    /**
     * @title 类名
     * @veIgnore
     */
    className: React.PropTypes.string,
    /**
     * @title 内容
     */
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ])
};
Button.defaultProps = {
    size: 'medium',
    type: 'primary',
    disabled: false,
    className: '',
    children: 'Button'
};

module.exports = Button;
