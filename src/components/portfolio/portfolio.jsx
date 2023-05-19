import { useEffect, useState } from "react";
import PortfolioList from "../portfoliolist/portfoliolist";
import "./portfolio.scss"
import { 
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
} from "../../data";

export default function Portfolio(){
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([]);
    const list = [
        {
            id : "featured",
            title : "Featured",
        },
        {
            id : "web",
            title : "Web App",
        },
        {
            id : "mobile",
            title : "Mobile App",
        },
        {
            id : "design",
            title : "Design",
        },
        {
            id : "content",
            title : "Content",
        },

    ]

    useEffect(() => {

        switch(selected){
            case "featured":
                setData(featuredPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "mobile":
                setData(mobilePortfolio)
                break;
            case "design":
                setData(designPortfolio)
                break;
            case "content":
                setData(contentPortfolio)
                break;
            default:
                setData(featuredPortfolio)            
        }

    },[selected]) // Whenever selected is changed useEffect will be run.

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                    title = {item.title}
                    active = {selected === item.id}
                    setSelected = {setSelected}
                    id = {item.id} 
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => ( // Idhar {} yeh waale braces mt daalna data load nhi hoga.
                    <div className="item">
                    <img 
                    src={d.img}
                    alt = ""
                    />
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}