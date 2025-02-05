import { Component } from '@angular/core';
import { faBox, faChartBar, faContactBook, faDashboard, faHand, faLocation, faMoneyBill, faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-side-nav',
  imports: [FontAwesomeModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop =  faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
}
