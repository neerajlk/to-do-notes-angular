import { Injectable } from '@angular/core';

import { BaseService } from '../../../core/http/base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private BaseService: BaseService) {}

  login(payload) {
      const subURL='/login'
    return this.BaseService.POST(subURL,payload);
  } 

  register(payload){
    const subURL='/user'
    return this.BaseService.POST(subURL,payload);
  }
}