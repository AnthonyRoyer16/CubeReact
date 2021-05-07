import '../../App.css';
import {Page} from "../../Layout/Page"
import { AccountComponent } from '../../Components/AccountComponent';

function PageAccount() {

   return (
    <Page header={false}>
      <AccountComponent/>
    </Page>
   );
};
 
 
 
export { PageAccount };