import React from 'react';
import Icon from 'uxcore-icon';
import Button from '../src';

const { ButtonGroup } = Button;


/* eslint-disable react/prefer-stateless-function */

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>{'default:'}</h2>
          <Button htmlType="submit" className="xxxx">Confirm</Button>
        </div>
        <div>
          <h2>{'size:'}</h2>
          <Button size="small">small</Button>
          <Button size="medium">medium</Button>
          <Button size="large">large</Button>
        </div>
        <div>
          <h2>{'status:'}</h2>
          <Button disabled>disabled</Button>
          <Button disabled type="primary">default primary</Button>
          <Button disabled type="secondary">secondary</Button>
          <Button disabled type="outline">outline</Button>
        </div>
        <div>
          <h2>{'type:'}</h2>
          <Button type="primary">default primary</Button>
          <Button type="secondary">secondary</Button>
          <Button type="outline">outline</Button>
        </div>
        <div>
          <h2>{'ghost:'}</h2>
          <div
            style={{
              background: 'lightblue',
              margin: '10px 0',
              padding: '10px 0',
            }}
          >
            <Button ghost type="secondary">secondary</Button>
            <Button ghost type="outline">outline</Button>
            <Button ghost disabled type="secondary">secondary</Button>
            <Button ghost disabled type="outline">outline</Button>
          </div>
          <div
            style={{
              background: '#3D4E5B',
              margin: '10px 0',
              padding: '10px 0',
            }}
          >
            <Button ghost type="white">secondary</Button>
            <Button ghost type="white" disabled>secondary</Button>
          </div>
        </div>
        <div>
          <h2>{'add event:'}</h2>
          <Button onClick={function () { alert('click me'); }}>click me</Button>
        </div>
        <div>
          <h2>{'loading:'}</h2>
          <Button loading size="small">small</Button>
          <Button loading size="medium">medium</Button>
          <Button loading size="large">large</Button>
          <Button loading type="primary">primary</Button>
          <Button loading type="secondary">secondary</Button>
          <Button loading type="outline">outline</Button>
        </div>
        <div>
          <h2>{'图标按钮'}</h2>
          <Button size="small"><div><Icon name="xiazai" />small</div></Button>
          <Button size="medium"><div><Icon name="xiazai" />medium</div></Button>
          <Button size="large"><div><Icon name="xiazai" />large</div></Button>
          <Button type="primary"><div><Icon name="xiazai" />primary</div></Button>
          <Button type="secondary"><div><Icon name="xiazai" />secondary</div></Button>
          <Button type="outline"><div><Icon name="xiazai" />outline</div></Button>
        </div>
        <div>
          <h2>button group:</h2>
          <ButtonGroup>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default Demo;
