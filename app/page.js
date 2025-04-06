"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";
import BusinessList from "./_components/BusinessList";

export default function Home() {


  const [categoryList, setCategoryList] = useState([]);
  const [businessLists, setBusinessLists] = useState([]);

  useEffect(() => {
    getCategoryList();
    getAllBusinessLists();
  }, [])


  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      setCategoryList(resp.categories);
    })
  }



  const getAllBusinessLists = () => {
    GlobalApi.getAllBusinessLists().then(resp => {
      setBusinessLists(resp.businessLists);
    })

  }





  return (
    <div>
      <Hero />

      <CategoryList categoryList={categoryList} />

      <BusinessList BusinessLists={businessLists} title={'Popular Businesses'} />
    </div>
  );
}
