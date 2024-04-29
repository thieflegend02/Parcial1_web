import { PlantasService } from './plantas.service';
import { Plantascomponent} from './plantas.component';
import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  imports: [
    CommonModule,
    plantas.component,
    HttpClientModule
  ],
  providers: [
    PlantasService
  ],
})
export class plantasModule { }
