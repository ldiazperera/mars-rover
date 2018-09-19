import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PHOTOS } from '../mock-photos';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit {

  photos = PHOTOS;
  selectedPhoto: Photo;

  constructor() { }

  ngOnInit() {
  }

  onSelect(photo: Photo): void {
    this.selectedPhoto = photo;
  }

  isSelectedPhoto(photo: Photo): boolean {
    return photo === this.selectedPhoto ? true : false;
  }

  getRandomPhoto(): void {
    let randomIndex: number;
    randomIndex = Math.floor(Math.random() * this.photos.length);
    console.log(randomIndex);
    this.selectedPhoto = this.photos[randomIndex];
  }

}
