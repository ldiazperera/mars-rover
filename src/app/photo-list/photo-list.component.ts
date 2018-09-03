import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photo: Photo = {
    title: 'Picture of the day',
    date: '01/01/1990'
  };

  constructor() { }

  ngOnInit() {
  }

}
