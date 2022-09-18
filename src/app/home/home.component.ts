import { Component } from '@angular/core';
import { OmneediaService } from '../../services/omneedia.service';

@Component({
  selector: 'home-db',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class Home {
  d: any | null[] = [];
  title = 'Home';
  constructor(private readonly omneedia: OmneediaService) {}
  async ngOnInit() {
    var { data, error } = await this.omneedia.get();
    this.d = data;
    console.log(data);
    console.log(error);
  }
}
