import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-review-table',
  templateUrl: './review-table.component.html',
  styleUrls: ['./review-table.component.css']
})
export class ReviewTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['sn','trans_type', 'customer_name', 'account_no', 'account_type', 'status', 'action'];
  dataSource = new MatTableDataSource<CustomerAccountDetails>(CUSTOMER_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
}

export interface CustomerAccountDetails {
  trans_type: string;
  customer_name: string;
  account_no: string;
  account_type: string;
  status: string;
}

const CUSTOMER_DATA: CustomerAccountDetails[] = [
  { customer_name: "Oyindamola Ajide", trans_type: 'Money Gram', account_no: '3054236710', account_type: 'Individual', status: 'Approved'},
  { customer_name: "Bayo Adelabu", trans_type: 'Western Union', account_no: '3214657010', account_type: 'Individual', status: 'Pending' },
  { customer_name: "Chukwudiebube Onyemachi", trans_type: 'Western Union', account_no: '3201236780', account_type: 'Individual', status: 'Pending' },
  { customer_name: "Joseph Malachi", trans_type: 'Rapid Transfer', account_no: '3241567800', account_type: 'Individual', status: 'Declined' },
  { customer_name: "Santo MFB", trans_type: 'Rapid Transfer', account_no: '3309238710', account_type: 'Corporate', status: 'Approved' },
  { customer_name: "Hassan Ibrahim", trans_type: 'Money Gram', account_no: '3098567012', account_type: 'Individual', status: 'Pending' },
  { customer_name: "Dankwanbo Merchandise", trans_type: 'Western Union', account_no: '3340216709', account_type: 'Enterprise', status: 'Pending' },
  { customer_name: "Onyinyechi Chinelo", trans_type: 'Rapid Transfer', account_no: '3285953018', account_type: 'Individual', status: 'Approved' },
  { customer_name: "Daramola Ezekiel", trans_type: 'Western Union', account_no: '3291344935', account_type: 'Corporate', status: 'Declined' },
  { customer_name: "Tiger Woods", trans_type: 'Money Gram', account_no: '3294953242', account_type: 'Individual', status: 'Approved' },
  { customer_name: "Dankwanbo Merchandise", trans_type: 'Western Union', account_no: '3340216709', account_type: 'Enterprise', status: 'Pending' },
  { customer_name: "Onyinyechi Chinelo", trans_type: 'Rapid Transfer', account_no: '3285953018', account_type: 'Individual', status: 'Approved' },
  { customer_name: "Daramola Ezekiel", trans_type: 'Western Union', account_no: '3291344935', account_type: 'Corporate', status: 'Declined' },
  { customer_name: "Tiger Woods", trans_type: 'Money Gram', account_no: '3294953242', account_type: 'Individual', status: 'Approved' },
  { customer_name: "Oyindamola Ajide", trans_type: 'Money Gram', account_no: '3054236710', account_type: 'Individual', status: 'Approved'},
  { customer_name: "Bayo Adelabu", trans_type: 'Western Union', account_no: '3214657010', account_type: 'Individual', status: 'Pending' },
  { customer_name: "Chukwudiebube Onyemachi", trans_type: 'Western Union', account_no: '3201236780', account_type: 'Individual', status: 'Pending' },
  { customer_name: "Joseph Malachi", trans_type: 'Rapid Transfer', account_no: '3241567800', account_type: 'Individual', status: 'Declined' },
  { customer_name: "Santo MFB", trans_type: 'Rapid Transfer', account_no: '3309238710', account_type: 'Corporate', status: 'Approved' },
  { customer_name: "Hassan Ibrahim", trans_type: 'Money Gram', account_no: '3098567012', account_type: 'Individual', status: 'Pending' },
];
