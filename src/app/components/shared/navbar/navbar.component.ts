import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../../services/pokemon.service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {}

  findFn(value: string) {
    // tslint:disable-next-line:no-unused-expression
    this.pokemonService.subject.next(value);
  }

  callHome() {
    // perform some operations

    // manage input, doesn't work :(
    /*
    const input = document.getElementById('textFind');
    input.innerHTML = '';
    */

    this.pokemonService.subject.next(null);

    // return to home page
    this.router.navigate(['/']);
  }
}
