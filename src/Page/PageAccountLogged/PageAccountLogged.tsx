import '../../App.css';
import {Page} from "../../Layout/Page"
import { FormsAccountLogged } from '../../Forms/';



function PageAccountLogged() {
  
   return (
    <Page header={true}>
      <FormsAccountLogged />
    </Page>
   );
};
 
 
 
export { PageAccountLogged};