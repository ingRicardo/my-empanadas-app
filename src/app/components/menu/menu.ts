import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

export interface ListItem {
  id: number;
  title: string;
  subtitle?: string;
  gallery: GalleryImage[];
  price?: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-menu',
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  readonly items = signal<ListItem[]>([
    { id: 1, title: 'Empanada de Piña', subtitle: 'Piña', price: 20, gallery: [
       
        { src: 'https://scontent.ftij1-3.fna.fbcdn.net/v/t39.30808-6/903615273_1794404975364643_5566410631126909818_n.jpg?stp=dst-jpg_tt6&cstp=mx1500x2048&ctp=s1500x2048&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iJpft3K1EbIQ7kNvwHUM85F&_nc_oc=AdoTpYBq3kqNaskwJf2PsCXQdvw08vVv8msDWIUc6ZTE-e6SIMGKknASHqXEhjWGGv-1OfPCp7vN72RsbWzGffjU&_nc_zt=23&_nc_ht=scontent.ftij1-3.fna&_nc_gid=9Uud1mKnKNoex4rdTdJZTQ&_nc_ss=7b3a8&oh=00_AQRK9NcCB-BqrivvlIwQNPffWFIEMyLssmKycZ_7tuqhyQ&oe=6B0E43E2', alt: 'Empanada de Piña pineapple filling' },
      ]   },
    { id: 2, title: 'Empanada de Manzana', subtitle: 'Manzana', price: 20,gallery: [
       
        { src: 'https://scontent.ftij1-3.fna.fbcdn.net/v/t39.30808-6/903615273_1794404975364643_5566410631126909818_n.jpg?stp=dst-jpg_tt6&cstp=mx1500x2048&ctp=s1500x2048&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iJpft3K1EbIQ7kNvwHUM85F&_nc_oc=AdoTpYBq3kqNaskwJf2PsCXQdvw08vVv8msDWIUc6ZTE-e6SIMGKknASHqXEhjWGGv-1OfPCp7vN72RsbWzGffjU&_nc_zt=23&_nc_ht=scontent.ftij1-3.fna&_nc_gid=9Uud1mKnKNoex4rdTdJZTQ&_nc_ss=7b3a8&oh=00_AQRK9NcCB-BqrivvlIwQNPffWFIEMyLssmKycZ_7tuqhyQ&oe=6B0E43E2', alt: 'Empanada de Manzana apple filling' },
      ]   },
    { id: 3, title: 'Empanada de Guayaba', subtitle: 'Guayaba', price: 20,gallery: [
        
        { src: 'https://scontent.ftij1-3.fna.fbcdn.net/v/t39.30808-6/903615273_1794404975364643_5566410631126909818_n.jpg?stp=dst-jpg_tt6&cstp=mx1500x2048&ctp=s1500x2048&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iJpft3K1EbIQ7kNvwHUM85F&_nc_oc=AdoTpYBq3kqNaskwJf2PsCXQdvw08vVv8msDWIUc6ZTE-e6SIMGKknASHqXEhjWGGv-1OfPCp7vN72RsbWzGffjU&_nc_zt=23&_nc_ht=scontent.ftij1-3.fna&_nc_gid=9Uud1mKnKNoex4rdTdJZTQ&_nc_ss=7b3a8&oh=00_AQRK9NcCB-BqrivvlIwQNPffWFIEMyLssmKycZ_7tuqhyQ&oe=6B0E43E2', alt: 'Empanada de Guayaba guayaba filling' },
      ]   },
  ]);
}
