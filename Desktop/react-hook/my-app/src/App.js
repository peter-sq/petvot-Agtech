import React, { useState } from "react";
import Accrodion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Convert from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";


const Item = [
    {
    title: "what is react",
    content: "react is a javascript frame work"
    },
    {
        title: "why use react",
        content: "react is a favorite javascript frame work amongs enginners"
        },
        {
            title: "how do you use react",
            content: "you use react by creating components"
            },    

];

const option = [
    {
        label: "the Color Red",
        value: "red"
    },
    {
        label: "the Color Green",
        value: "green"
    },
    {
        label: "A shade of Blue",
        value: "blue"
    }

]

export default () => {
    const [selected, setSelected] = useState(option[0]);


   return (
    <div>
        <Header />
        <Route path = '/' >
            <Accrodion  items = {Item}/>

        </Route>
        <Route path = '/list' >
            <Search />

        </Route>
        <Route path = '/dropdown' >
            <Dropdown 
            label = "Select a Color"
            option = {option}
            selected = {selected} 
            onSelectedChange = {setSelected} />
        </Route>
        <Route path = '/translate' >
            <Translate />
        </Route>

    </div>
       
   );
};