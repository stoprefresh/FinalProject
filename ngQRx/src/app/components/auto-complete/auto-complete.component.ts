import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})

export class AutoCompleteComponent implements OnInit {
  labelAttribute: string;
  objects: any[];

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  protected filter(keyword) {
    keyword = keyword.toLowerCase();
    return this.objects.filter(object => {
      const value = object[this.labelAttribute].toLowerCase();
      return value.includes(keyword);
    });
  }
}
