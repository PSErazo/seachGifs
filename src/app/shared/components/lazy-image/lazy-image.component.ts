import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoader: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('Gifs properties is required');
  }

  onLoad(): void {
    console.log('se cargo la imagen');

    this.hasLoader = true;
  }
}
