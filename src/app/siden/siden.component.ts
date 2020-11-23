import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-siden',
  templateUrl: './siden.component.html',
  styleUrls: ['./siden.component.scss'],
  providers:[AuthService],
})
export class SidenComponent implements OnInit {
  isSidebarOpen = false;
  public user$: Observable<any>=  this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService,private router: Router) { }
  async onLogout(){
    try{
      this.isSidebarOpen = false;
      await this.authSvc.logout();
      this.router.navigate(['/login'])
    }
    catch(error){
      console.log(error);
    }
  }

  panelOpenState = false;
  ngOnInit(): void {
  }

}
