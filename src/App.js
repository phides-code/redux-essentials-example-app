import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { Navbar } from './app/Navbar';
import { PostsList } from './features/posts/PostsList';
import { AddPostForm } from './features/posts/AddPostForm';
import { SinglePostPage } from './features/posts/SinglePostPage';
import { EditPostForm } from './features/posts/EditPostForm';

function App() {
    return (
        <Router>
            <Navbar />
            <div className='App'>
                <Switch>
                    <Route
                        exact
                        path='/'
                        render={() => (
                            // <section>
                            //     <h2>
                            //         Welcome to the Redux Essentials example app!
                            //     </h2>
                            // </section>
                            <>
                                <AddPostForm />
                                <PostsList />
                            </>
                        )}
                    />
                    <Route
                        exact
                        path='/posts/:postId'
                        component={SinglePostPage}
                    />
                    <Route
                        exact
                        path='/editpost/:postId'
                        component={EditPostForm}
                    />
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
