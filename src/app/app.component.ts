import { Joke } from './shared/models/joke.model';
import { ChuckServiceService } from './services/chuck-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  joke: Joke;

  constructor (private chuckService: ChuckServiceService) {}

  ngOnInit() {
    this.chuckService.getRandomJoke().subscribe((myJoke:Joke) => {
      this.joke = myJoke;
    })
  }
}
