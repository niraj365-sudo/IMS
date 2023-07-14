import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {

  user: any = {}
  
  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  loginUser(){
    console.log(this.user)

    this.authService.login(this.user).subscribe(
      (response: any)=>{
        console.log(response.success);
        
        if(response.success){
          this.router.navigate(['/'])
          this.toastr.success(response.message, "Success")
        }else{
          this.toastr.error(response.message, "Error")
        }
      },
      (error: any)=>{
        console.log(error);
        
      }
    )
  }

}
