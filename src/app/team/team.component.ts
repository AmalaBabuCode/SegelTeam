import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  crewList: any = [];
  tempcrewList: any = [];
  clickedLoadMoreCount = 1;
  currentDuty = 'show all';
  isNodata = false;
  isLoading = true;

  dutyList = [
    {
      duty: 'show all',
      isSelected: true,
    },
    {
      duty: 'trim',
      isSelected: false,
    },
    {
      duty: 'tactic',
      isSelected: false,
    },
    {
      duty: 'HELMSMANN',
      isSelected: false,
    },
  ];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getTeamMembers(this.clickedLoadMoreCount, 5, this.currentDuty);
  }

  getTeamMembers(page: number, limit: number, duty: string) {
    this.teamService
      .getTeamMembers(page, limit, duty)
      .subscribe((team: any) => {
        this.isLoading = false;
        if (team['data']['data'].length > 0) {
          let list: any = [];
          list = team['data']['data'];
          this.crewList = this.crewList.concat(list);
          this.tempcrewList = this.tempcrewList.concat(list);
          this.isNodata = false;
        } else {
          this.isNodata = true;
        }
      });
  }

  loadMore() {
    this.clickedLoadMoreCount++;
    this.getTeamMembers(this.clickedLoadMoreCount, 5, this.currentDuty);
  }

  getListByDuty(duty: string) {
    this.dutyList.forEach((element) => {
      if (element.duty === duty) {
        element.isSelected = true;
      } else element.isSelected = false;
    });
    this.crewList = [];
    this.tempcrewList = [];
    this.clickedLoadMoreCount = 1;
    this.currentDuty = duty;
    this.getTeamMembers(this.clickedLoadMoreCount, 5, this.currentDuty);
  }

  changeData(index: number) {
    this.crewList = [];

    this.tempcrewList.forEach((element: any) => {
      this.crewList.push(element)
    });

    let currentMember: any = this.crewList[index];
    let member = {
      name: currentMember.name,
      isProfile: true,
    };
    this.crewList[index + 1] = member;
  }

}
