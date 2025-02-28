import { useState, useEffect } from "react";
import "../assets/css/blog.css";
import { buscar } from "../API/api.js";
import ListCategories from "../components/ListCategories";
import { useParams, Routes, Route, Link, useResolvedPath} from "react-router-dom";
import ListPosts from "../components/ListPosts";
import SubCategoria from "./SubCategorias";

const Categoria = () =>{
    const [subcategorias, setSubCategorias] = useState([]);
    const {id} = useParams();
    const url = useResolvedPath("").pathname;

    useEffect(()=>{
        buscar(`/categorias/?id=${id}`, (response) =>
        {
            setSubCategorias(response[0].subcategorias);
        });
    }, [id]);

    return (
        <>
            <div className="container">
                <h2 className="title-page">Pet Noticias</h2>
            </div>
            <ListCategories></ListCategories>
            <ul className="category-list container flex">
                {
                    subcategorias.map(subcategoria =>(
                        <li className={`category-list__category category-list__category--${id}`} key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>
                                    {subcategoria}
                            </Link>
                            {/*<Link to={`/categoria/${id}/${subcategoria}`}>{subcategoria}</Link>*/}
                        </li>
                    ))
                }
            </ul>
            <Routes>
                <Route path="/" element={<ListPosts url={`/posts?categoria=${id}`}></ListPosts>}></Route>
                <Route path="/:subcategoria" element={<SubCategoria></SubCategoria>}></Route>
            </Routes>
        </>
    );
}

export default Categoria;