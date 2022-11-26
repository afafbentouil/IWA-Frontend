import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { Login } from "../models/login.model";
import { Token } from "../models/token.model";
import { LocalStorageService } from "./local-storage.service";
 
 
@Injectable()
 
export class AuthService{
 
    constructor(
        private localService: LocalStorageService,
        private http: HttpClient,
        private router: Router,
        ) {}
 
    setToken(value : string): void {
        this.localService.set("Token", value);
    }
 
    getToken(): string|null {
        return this.localService.get("Token");
    }
 
    removeToken(): void {
        this.localService.remove("Token");
    }
 
    setUserId(value: string): void{
        this.localService.set("userId", value);
    }
 
    getUserId(): string | null{
        return this.localService.get("userId");
    }
 
    login(logins : Login): void {
        const options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
        this.http.post<Token>(environment.apiUrl+'user/login', JSON.stringify(logins), options)
            .subscribe((res) => {
                this.setUserId(res.userId);
                this.setToken(res.token);
                this.router.navigateByUrl('animes');
                },
                (error) => {
                    alert("Une erreur s'est produite, veuillez réessayer de vous connecter s'il vous plaît");
                }    
            );
    }
 
    /*register(registration : Login) : void {
      const options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
      this.http.post(environment.apiUrl + "user/signup", JSON.stringify(registration), options)
          .subscribe(error => {
                  alert("Une erreur s'est produite, veuillez réessayer de vous inscrire s'il vous plaît");
              },
              res => {
                  this.router.navigateByUrl('animes');
              }
          )
  }*/

  register(username: string, email:string, password: string) {
    return this.http.post<any>(environment.apiUrl+"/users/signup", { username,email, password })
            .subscribe(error => {
              alert("Une erreur s'est produite, veuillez réessayer de vous inscrire s'il vous plaît");
            },
            res => {
                this.router.navigateByUrl('animes');
            }
          );
  }
}
