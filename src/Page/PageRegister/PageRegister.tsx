import '../../App.css';
import {Page} from "../../Layout/Page"
import { FormsRegister } from '../../Forms';



function PageRegister() {
  
   return (
    <Page header={true}>
      <FormsRegister />
    </Page>
   );
};
 
 
 
export { PageRegister};