import {useEffect } from 'react';
// import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import {fetchCamperCatalog} from '../../redux/operations';
import { Catalog } from "components/Catalog/Catalog";

// const [visibleCampersCount, setVisibleCampersCount] = useState(4);
// const handleLoadMore = () => {
//   setVisibleCampersCount(prevCount => Math.min(prevCount + campers.length));
// };


export default function CatalogPage (){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCamperCatalog());
      }, [dispatch]);

    return(
        <>
        <Catalog/>
        </>
    )
}