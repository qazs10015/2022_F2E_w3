import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  goNext() {
    this.router.navigateByUrl('/productPending');
  }

}
