import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewDialogComponent } from '../new-dialog/new-dialog.component';

@Component({
  selector: 'app-headline-cards',
  templateUrl: './headline-cards.component.html',
  styleUrls: ['./headline-cards.component.scss'],
})
export class HeadlineCardsComponent implements OnInit {
  @Input() bgColor = '#E5EAEE';
  @Input() textColor = '#181818';
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialog = this.dialog.open(NewDialogComponent,{
      height: '98%'
    });
  }
}
