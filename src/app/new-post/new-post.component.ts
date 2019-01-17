import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/post.model';

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

    postForm: FormGroup;

    constructor( private formBuilder: FormBuilder,
                 private router: Router,
                 private postsService: PostsService ) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.postForm = this.formBuilder.group({
            title: ['', Validators.required],
            content: ['', Validators.required]
        });
    }

    onSavePost() {
        const title = this.postForm.get('title').value;
        const content = this.postForm.get('content').value;
        const newPost = new Post(title, content);
        console.log(newPost);
        this.postsService.createNewPost(newPost);
        this.router.navigate(['/posts']);
    }

}
