import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  user: any = {}


  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}
  
  registerUser(){
    console.log(this.user);
    debugger
    this.authService.register(this.user).subscribe(
      (response:any)=>{
        console.log(response.success);
        
        if(response.success){
          this.router.navigate(['/login'])
          this.toastr.success(response.message, "Success")
          this.user = {}
        }else{
          this.toastr.error(response.message, 'Error')
        }
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
}
