import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string)=>void
}

//props와 state의 차이 짚고 넘어갈 것

function ListGroup({items, heading, onSelectItem}: Props) {

  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
          {
            items.map((item, index)=>(
              <li className={selectedIndex===index ? 'list-group-item active':'list-group-item'} 
              key={item} 
              onClick={()=> {
                setSelectedIndex(index)
                onSelectItem(item)
              }}>{item}</li>
            ))
          }
        </ul>
    </>
  )
}

export default ListGroup;