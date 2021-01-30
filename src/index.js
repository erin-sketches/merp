import { render } from 'preact';
import { SketchPicker } from 'react-color';
import { useState } from 'preact/hooks';

const N = (props) => {
    return <span className='n'>{props.children}</span>
}
const NR = (props) => {
    return <span className='nr'>{props.children}</span>
}
const B = (props) => {
    return <span className='b'>{props.children}</span>
}
const BR = (props) => {
    return <span className='br'>{props.children}</span>
}
const Rows =(props) => {
    const {rows} = props.values;
    const els = rows.map((r) => 
                <div>
                    <hr className="smol"></hr>
                    <B> {r[0]}</B>
                    <N> {r[1]}</N>
                    <BR>{r[2]}</BR>
                </div>
            );
    return (
        <div>
            {els}
        </div>
    )
}
const Vits = (props) => {
    const {rows} = props.values;
    const els = rows.map((r) => 
        <div>
            <N> {r}</N>
            <hr className="smol"></hr>
        </div>
    );
    return (
        <div>
            {els}
        </div>
    )
}
const App = () => {
    const [color,setColor] = useState('black');
    const [bgcolor,setbgColor] = useState('white');
    const upd_color = (color) => {
        let root = document.documentElement;
        root.style.setProperty('--color',color.hex);
        setColor(color.hex);
    }
    const upd_bgcolor = (color) => {
        let root = document.documentElement;
        root.style.setProperty('--bg-color',color.hex);
        setbgColor(color.hex);
    }
    return (
    <div>
      <h3>Background Color | Color</h3>
      <div style={{display:'flex'}}>
          <div>
              <h4>Background color</h4>
              <SketchPicker color={bgcolor} onChange={upd_bgcolor} />
          </div>
          <div>
              <h4>Text color</h4>
              <SketchPicker color={color} onChange={upd_color} />
          </div>
      </div>
      <h3>Fax</h3>
      <div></div>

      <div className="border">
        <div className="header">
            Nutrition Facts  
        </div>
        <div className="serving">
            <div>
                <N>Serving Size 1 cup (228g)</N>
            </div>
            <div>
                <N>Serving Per Container 2</N>
            </div>
        </div>
        <div className="body">
            <hr className="thicc"></hr>
            <B>Amount Per Serving</B>
            <hr className="smol"></hr>
            <div>
                <B>Calories</B>
                <N> 260</N>
                <NR>Calories from Fat 120</NR>
            </div>
            <hr></hr>
            <BR>% Daily Value*</BR>
            <Rows values={{rows:[
                ['Total Fat','13g','20%'],
                ['Cholesterol','30mg','10%'],
                ['Sodium','660mg','10%'],
                ['Total Carbohydrate','31g','10%'],
                ['Protein','5g','']
            ]}}>
            </Rows>
            <hr className="thicc"></hr>
            <Vits values={{rows:[
                'Vitamin A 4%',
                'Calcium 15%'
            ]}} />
            </div>
            <div className='s'>
                * Percent Daily Values are based on a 2,000 calorie diet. Your Daily Values may be higher or lower depending on your calorie needs.
            </div>
      </div>
    </div>
    )

}
window.addEventListener('DOMContentLoaded',()=>{
    render(<App />,document.getElementById('app'));
})