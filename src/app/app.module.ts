import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {PostsService} from './services/posts.service';
import { NewPostComponent } from './new-post/new-post.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';


const appRoutes: Routes = [
    { path: 'posts', component: PostListComponent },
    { path: 'new', component: NewPostComponent },
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: '**', redirectTo: 'posts' },
];

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        PostListItemComponent,
        NewPostComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        PostsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
