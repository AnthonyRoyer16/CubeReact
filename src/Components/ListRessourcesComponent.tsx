/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Row } from 'antd';
import '../App.css';
import { FileImageOutlined, LikeOutlined, DownloadOutlined, FundViewOutlined, HeartFilled} from '@ant-design/icons';
//import { GET_RESSOURCES, SEARCH } from "../Modules/Ressources/Actions";
import { useRessourcesState, /*useRessourcesDispatch*/ } from "../Modules/Ressources";
import { useEffect, useState } from 'react';
import { where, includes, filter, isNil } from "ramda";
import { errorMessage } from '../Core/Tools'


function ListRessourcesComponent() {

    const { search, ressources } = useRessourcesState();
    //const dispatch = useRessourcesDispatch();

    const [searched, setSearched] = useState(ressources);

      useEffect(() => {
        switch (true) {
            case filter(where({title: includes(String(search))}))(ressources).length === 0:
                errorMessage("Erreur, aucunes ressources ont été trouvées !")
                setSearched(ressources);
                break;
            case filter(where({title: includes(String(search))}))(ressources) !== undefined:
                setSearched(filter(where({title: includes(String(search))}))(ressources));
                break;
            case search === "":
                setSearched(ressources);
                break;
        }
      }, [search]);

   return (
    <>
    {!isNil(searched) ?
        <Row style={{paddingBottom:"15%", color:"#F2F2F2", fontWeight:"bolder", paddingLeft:"12%", width:"80%"}}>
         {   
         !isNil(searched) && searched.map((item: any) => 
         <Col span={24} style={{marginBottom:"20px"}}>
            <Row style={{backgroundColor:"#75BFBF", borderBottom: "6px solid darkslategrey", borderLeft: "0.5px solid darkslategrey" , borderTop: "1px solid darkslategrey" , borderRight: "1px solid darkslategrey" , borderRadius:"12px", boxShadow: "2.5px 2.5px 5px #8a8a8a"}}>
                <HeartFilled style={{position:"absolute", top:"10px", right:"15px", color:"#e0544a", fontSize:"24px"}}/>
                <Col span={4} style={{margin:"20px"}}>
                    {item.type === "image" ? 
                     <FileImageOutlined style={{fontSize:"100px"}} /> : item.type }
                </Col>
                <Col span={12} style={{margin:"15px", paddingLeft:"15px", paddingTop:"18px"}}>
                    <Row>
                        <Col span={12} style={{fontSize:"18px"}}>
                             {item.title}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{fontWeight:"bold", fontSize:"14px"}}>
                             {`Description : ${item.desc}`}
                        </Col>
                    </Row>
                    <Row style={{color:"white", opacity:"0.8",fontWeight:"normal", fontSize:"13px"}}>
                        <Col span={24}>
                             {`Uploader le : ${item.upload}`}
                        </Col>
                        <Col span={24}>
                             {`Type de fichier : ${item.type}`}
                        </Col>
                    </Row>
                </Col>
                <Col span={4} style={{margin:"20px"}}>
                    <Row>
                        <Col span={12} style={{fontSize:"22px"}}>
                            <LikeOutlined />
                        </Col>
                        <Col span={12} style={{fontSize:"20px"}}>
                            {!isNil(item.metaData.like) ? item.metaData.like : 0}
                        </Col>
                        <Col span={12} style={{fontSize:"22px"}}>
                            <FundViewOutlined />
                        </Col>
                        <Col span={12} style={{fontSize:"20px"}}>
                            {!isNil(item.metaData.like) ? item.metaData.like : 0}
                        </Col>
                        <Col span={12} style={{fontSize:"22px"}}>
                            <DownloadOutlined />
                        </Col>
                        <Col span={12} style={{fontSize:"20px"}}>
                            {!isNil(item.metaData.fav) ? item.metaData.fav : 0}
                        </Col>
                    </Row>
                </Col>
                </Row>
         </Col>
         )
        }
        </Row>
   : null}   </>
   );
};
 
 
export { ListRessourcesComponent };