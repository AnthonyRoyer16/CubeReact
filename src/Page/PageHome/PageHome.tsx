import '../../App.css';
import {Page} from "../../Layout/Page"
import { ListRessourcesComponent } from '../../Components/ListRessourcesComponent';

function PageHome() {
  
   return (
    <Page header={true}>
      <ListRessourcesComponent />
    </Page>
   );
};
 
 
 
export { PageHome };