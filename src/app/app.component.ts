import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Austin Rich Photography';
  description = 'A photographic showcase';

  itemValue = '';
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }

  onSubmit() {
    this.db.list('/items').push({ content: this.itemValue });
    this.itemValue = '';
  }
}

