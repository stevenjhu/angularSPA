import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastDetailsComponent } from './Public/cast-details.component';
import { GenresComponent } from './Public/genres.component';
import { MovieDetailsComponent } from './Public/movie-details.component';
import { MoviesComponent } from './Public/movies.component';

const routes: Routes = [
  { path: "", component: MoviesComponent },
  { path: "Genre", component: GenresComponent},
  { path: "Movie-Details", component: MovieDetailsComponent},
  { path: "Cast-Details", component: CastDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
