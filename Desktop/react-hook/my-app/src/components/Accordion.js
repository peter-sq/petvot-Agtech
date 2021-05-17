import React, {useState} from "react";


const Accrodion = ({items}) => {
    const [ActiveIndex, setActiveIndex] = useState(null);
    const OnTitleClicked = (index) => {
        setActiveIndex(index);
    

    };
    const RenderdItem = items.map((item, index) => {
        //index here is index of the item which is 0 1 2

        const active = index === ActiveIndex ? 'active' : '';

        return (
             <React.Fragment key = {item.title}>
            <div className= {`title ${active}`}
              onClick = {() => OnTitleClicked (index)}>
              
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className =  {`content ${active}`}> 
                <p> {item.content}</p>
               
            </div>
        </React.Fragment>
        );
    

    });

    return (
        <div className = "ui styled accordion">
            {RenderdItem}
           
        </div>
        )
    
};

export default Accrodion;