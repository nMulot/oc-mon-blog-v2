import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    posts: Post[] = [];
    postsSubject = new Subject<Post[]>();

    constructor() { }

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    savePosts() {
        firebase.database().ref('/posts').set(this.posts);
    }

    getPosts() {
        firebase.database().ref('/posts')
            .on('value', (data: DataSnapshot) => {
                    this.posts = data.val() ? data.val() : [];
                    this.emitPosts();
                }
            );
    }

    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.savePosts();
        this.emitPosts();
    }

    removePost(index: number) {
        this.posts.splice(index, 1);
        this.savePosts();
        this.emitPosts();
    }


}
