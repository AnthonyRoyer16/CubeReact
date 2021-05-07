import { Col, Row } from 'antd';
import '../App.css';
import { FileImageOutlined, LikeOutlined, DownloadOutlined, FundViewOutlined } from '@ant-design/icons';



function ListRessourcesComponent(DataSource: any) {

   return (
    <>
        <Row style={{paddingBottom:"15%", color:"#F2F2F2", fontWeight:"bolder", paddingLeft:"12%", width:"86%"}}>
         {   
         DataSource.DataSource.map( (item: any) => 
         <Col span={24} style={{marginBottom:"20px"}}>
            <Row style={{backgroundColor:"#75BFBF", borderWidth:"10px", borderColor:"orange", borderRadius:"12px", boxShadow: "2.5px 2.5px 5px #8a8a8a"}}>
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
                            {item.metaData.like}
                        </Col>
                        <Col span={12} style={{fontSize:"22px"}}>
                            <FundViewOutlined />
                        </Col>
                        <Col span={12} style={{fontSize:"20px"}}>
                            {item.metaData.like}
                        </Col>
                        <Col span={12} style={{fontSize:"22px"}}>
                            <DownloadOutlined />
                        </Col>
                        <Col span={12} style={{fontSize:"20px"}}>
                            {item.metaData.fav}
                        </Col>
                    </Row>
                </Col>
                </Row>
         </Col>
         )
        }
        </Row>
    </>
   );
};
 
 
export { ListRessourcesComponent };