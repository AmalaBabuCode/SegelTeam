import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
})
export class TeamMemberComponent implements OnInit {
  @Input() member: any;
  @Input() index: number = 0;

  @Output() hoveredCardindex = new EventEmitter<number>();
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  emitValue() {
    this.hoveredCardindex.emit(this.index);
  }
}
