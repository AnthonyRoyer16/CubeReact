import React, { useState }  from 'react';
import { Typography } from 'antd';
import '../../App.css';
import {Page} from "../../Layout/Page"
import { ListRessourcesComponent } from '../../Components/ListRessourcesComponent';


const dataSource = [
  {
    id:"1",
    title:"Title1",
    desc:"desc",
    upload:"25 janvier 2022",
    type:"image",
    metaData:{
      view:"10",
      like:"5",
      fav:"2"
  },
},
{
  id:"2",
  title:"Title2",
  desc:"desc",
  upload:"25 janvier 2022",
  type:"image",
  metaData:{
    view:"10",
    like:"5",
    fav:"2"
},
},
{
  id:"2",
  title:"Title2",
  desc:"desc",
  upload:"25 janvier 2022",
  type:"image",
  metaData:{
    view:"10",
    like:"5",
    fav:"2"
},
},
{
  id:"2",
  title:"Title2",
  desc:"desc",
  upload:"25 janvier 2022",
  type:"image",
  metaData:{
    view:"10",
    like:"5",
    fav:"2"
},
},
{
  id:"2",
  title:"Title2",
  desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit in diam malesuada vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec congue lacus at leo viverra volutpat nec sit amet tortor. Sed facilisis venenatis elit vel viverra. ",
  upload:"25 janvier 2022",
  type:"image",
  metaData:{
    view:"10",
    like:"5",
    fav:"2"
},
},
]

function PageTest() {

  dataSource.map((item: any) => {
    console.log(item)
  })
 
  console.log(dataSource)
  
   return (
    <Page header={true}>
      <ListRessourcesComponent DataSource={dataSource}/>
    </Page>
   );
};
 
 
 
export { PageTest };