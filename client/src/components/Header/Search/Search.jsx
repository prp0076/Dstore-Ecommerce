import "./Search.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {    MdClose } from "react-icons/md";
import  useFetch  from "../../../hooks/useFetch";
const Search = ({setShowsearch}) => {
    const [query , setQuery] = useState("")
    const navigate = useNavigate();
    const onChange =(event)=>{
      setQuery(event.target.value);
    }
 
    let data  = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);
    if (!query.length) {
        data = null;
    }
    return <div className="search-modal">
        <div className="form-field">
            <input type="text"  autoFocus placeholder="Search for Product" value={query} onChange={onChange}/>
            <MdClose onClick={()=>setShowsearch(false)} />
        </div>
        {/* search results */}
        <div className="search-result-content">
            <div className="search-results">
                {data?.data?.map(item =>(
                    <div key={item.id} className="search-result-item" onClick={() =>{
                        navigate("/product/" + item.id)
                        setShowsearch(false)
                    }}>
                    <div className="img-container">
                      <img src={ item.attributes.img.data[0].attributes.url } alt="" />
                    </div>
                    <div className="prod-details">
                       <span className="name">{item.attributes.title}</span>
                       <span className="desc">{item.attributes.desc}</span>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    </div>;
};

export default Search;
