// (google translator api key) AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM 
import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const option =  [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Igbo',
        value: 'ig'
    },
    {
        label: 'yoruba',
        value: 'yo'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(option[0]);
    const [Text, setText] = useState('');
    return(
        <div>
            <div className = "ui form">
                <div className = "field">
                    <label>Enter Text</label>
            <input value = {Text} onChange = {(e)=> setText(e.target.value)} /></div>
            
            <Dropdown 
            label = "select a Language"
            selected = {language}
             onSelectedChange = {setLanguage} 
             option = {option}/>
        </div>
        <hr/>
        <h3 className = "ui header">Output</h3>
        < Convert  text = {Text}  language = {language}/>

        </div>
      
    );
};

export default Translate;