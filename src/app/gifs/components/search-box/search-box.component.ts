import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtTageInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private GifsService: GifsService) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.GifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
