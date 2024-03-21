import { Component, OnInit } from '@angular/core';
import { MenuItem } from './_models';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrl: './left-nav.component.scss',
})
export class LeftNavComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  public ngOnInit(): void {
    this.menuItems = this.getMenuItems();
  }

  /**
   * Fetch the menu items
   */
  private getMenuItems(): MenuItem[] {
    return [
      { label: 'Invoices', route: ['/'], icon: 'list' },
      { label: 'Add Invoice', route: ['add-invoice'], icon: 'request_quote' },
      { label: 'Bug Report', route: ['bug-report'], icon: 'bug_report' },
    ];
  }
}
