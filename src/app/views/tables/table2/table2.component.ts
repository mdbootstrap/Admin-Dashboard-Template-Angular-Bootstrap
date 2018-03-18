import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component implements OnInit {

  @Input() shadows = true;

   tableData: object[] = [
    { first: 'Mark', last: 'Otto', username: '@mdo', email: 'markotto@gmail.com', country: 'USA', city: 'San Francisco' },
    { first: 'Jacob', last: 'Thornton', username: '@fat', email: 'jacobt@gmail.com', country: 'France', city: 'Paris' },
    { first: 'Larry', last: 'the Bird', username: '@twitter', email: 'larrybird@gmail.com', country: 'Germany', city: 'Berlin' },
    { first: 'Paul', last: 'Topolski', username: '@P_Topolski', email: 'ptopolski@gmail.com', country: 'Poland', city: 'Warsaw' },
    { first: 'Anna', last: 'Doe', username: '@andy', email: 'annadoe@gmail.com', country: 'Spain', city: 'Madrid' }
  ];

   dateOptionsSelect: object[] = [
    { value: '1', label: 'Today' },
    { value: '2', label: 'Yesterday' },
    { value: '3', label: 'Last 7 days' },
    { value: '4', label: 'Last 30 days' },
    { value: '5', label: 'Last week' },
    { value: '6', label: 'Last month' }
  ];

   bulkOptionsSelect: object[] = [
    { value: '1', label: 'Delete' },
    { value: '2', label: 'Export' },
    { value: '3', label: 'Change segment' }
  ];

   showOnlyOptionsSelect: object[] = [
    { value: '1', label: 'All (2000)' },
    { value: '2', label: 'Never opened (200)' },
    { value: '3', label: 'Opened but unanswered (1800)' },
    { value: '4', label: 'Answered (200)' },
    { value: '5', label: 'Unsunscribed (50)' }
  ];

   filterOptionsSelect: object[] = [
    { value: '1', label: 'Contacts in no segments (100)' },
    { value: '2', label: 'Segment 1  (2000)' },
    { value: '3', label: 'Segment 2  (1000)' },
    { value: '4', label: 'Segment 3  (4000)' }
  ];

  private sorted = false;

  constructor() { }

  ngOnInit() {
  }

  sortBy(by: string): void {

    this.tableData.sort((a, b) => {
      if (a[by] < b[by]) {
        return this.sorted ? 1 : -1;
      }
      if (a[by] > b[by]) {
        return this.sorted ? -1 : 1;
      }

      return 0;
    });

    this.sorted = !this.sorted;
  }

}
