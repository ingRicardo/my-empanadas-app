import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

export interface ListItem {
  id: number;
  title: string;
  subtitle?: string;
  gallery: GalleryImage[];
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
    { id: 1, title: 'Empanada de Piña', subtitle: 'Piña',gallery: [
        { src: 'https://scontent.ftij1-3.fna.fbcdn.net/v/t39.30808-6/903615273_1794404975364643_5566410631126909818_n.jpg?stp=dst-jpg_tt6&cstp=mx1500x2048&ctp=p526x296&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_62FzobnY1UQ7kNvwEGCoj6&_nc_oc=AdqB5s7TaVD15nhfvquFtE0Ri2eVPf5qxl01wOBb_TvsfIrjC6yfaCzeqxxLfKAKSsm1anmSv0posj_nlAw_xlLi&_nc_zt=23&_nc_ht=scontent.ftij1-3.fna&_nc_gid=2thteiqn9Dl85yh8I1_qKw&_nc_ss=7b2a8&oh=00_AQSF-EhPRy5GxAoVJSotGCqmCkhnpC2G3LHZzo-lXRcS8g&oe=6B050962', alt: 'Empanada de Piña whole' },
        { src: 'https://scontent.ftij1-3.fna.fbcdn.net/v/t39.30808-6/903615273_1794404975364643_5566410631126909818_n.jpg?stp=dst-jpg_tt6&cstp=mx1500x2048&ctp=p526x296&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_62FzobnY1UQ7kNvwEGCoj6&_nc_oc=AdqB5s7TaVD15nhfvquFtE0Ri2eVPf5qxl01wOBb_TvsfIrjC6yfaCzeqxxLfKAKSsm1anmSv0posj_nlAw_xlLi&_nc_zt=23&_nc_ht=scontent.ftij1-3.fna&_nc_gid=2thteiqn9Dl85yh8I1_qKw&_nc_ss=7b2a8&oh=00_AQSF-EhPRy5GxAoVJSotGCqmCkhnpC2G3LHZzo-lXRcS8g&oe=6B050962', alt: 'Empanada de Piña pineapple filling' },
      ]   },
    { id: 2, title: 'Empanada de Manzana', subtitle: 'Manzana',gallery: [
        { src: 'https://scontent.ftij1-3.fna.fbcdn.net/v/t39.30808-6/903615273_1794404975364643_5566410631126909818_n.jpg?stp=dst-jpg_tt6&cstp=mx1500x2048&ctp=p526x296&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_62FzobnY1UQ7kNvwEGCoj6&_nc_oc=AdqB5s7TaVD15nhfvquFtE0Ri2eVPf5qxl01wOBb_TvsfIrjC6yfaCzeqxxLfKAKSsm1anmSv0posj_nlAw_xlLi&_nc_zt=23&_nc_ht=scontent.ftij1-3.fna&_nc_gid=2thteiqn9Dl85yh8I1_qKw&_nc_ss=7b2a8&oh=00_AQSF-EhPRy5GxAoVJSotGCqmCkhnpC2G3LHZzo-lXRcS8g&oe=6B050962', alt: 'Empanada de Manzana whole' },
        { src: 'https://scontent.ftij1-3.fna.fbcdn.net/v/t39.30808-6/903615273_1794404975364643_5566410631126909818_n.jpg?stp=dst-jpg_tt6&cstp=mx1500x2048&ctp=p526x296&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_62FzobnY1UQ7kNvwEGCoj6&_nc_oc=AdqB5s7TaVD15nhfvquFtE0Ri2eVPf5qxl01wOBb_TvsfIrjC6yfaCzeqxxLfKAKSsm1anmSv0posj_nlAw_xlLi&_nc_zt=23&_nc_ht=scontent.ftij1-3.fna&_nc_gid=2thteiqn9Dl85yh8I1_qKw&_nc_ss=7b2a8&oh=00_AQSF-EhPRy5GxAoVJSotGCqmCkhnpC2G3LHZzo-lXRcS8g&oe=6B050962', alt: 'Empanada de Manzana apple filling' },
      ]   },
    { id: 3, title: 'Empanada de Fresa', subtitle: 'Fresa',gallery: [
        { src: 'https://scontent.ftij1-3.fna.fbcdn.net/v/t39.30808-6/903615273_1794404975364643_5566410631126909818_n.jpg?stp=dst-jpg_tt6&cstp=mx1500x2048&ctp=p526x296&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_62FzobnY1UQ7kNvwEGCoj6&_nc_oc=AdqB5s7TaVD15nhfvquFtE0Ri2eVPf5qxl01wOBb_TvsfIrjC6yfaCzeqxxLfKAKSsm1anmSv0posj_nlAw_xlLi&_nc_zt=23&_nc_ht=scontent.ftij1-3.fna&_nc_gid=2thteiqn9Dl85yh8I1_qKw&_nc_ss=7b2a8&oh=00_AQSF-EhPRy5GxAoVJSotGCqmCkhnpC2G3LHZzo-lXRcS8g&oe=6B050962', alt: 'Empanada de Fresa whole' },
        { src: 'https://scontent.ftij1-3.fna.fbcdn.net/v/t39.30808-6/903615273_1794404975364643_5566410631126909818_n.jpg?stp=dst-jpg_tt6&cstp=mx1500x2048&ctp=p526x296&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_62FzobnY1UQ7kNvwEGCoj6&_nc_oc=AdqB5s7TaVD15nhfvquFtE0Ri2eVPf5qxl01wOBb_TvsfIrjC6yfaCzeqxxLfKAKSsm1anmSv0posj_nlAw_xlLi&_nc_zt=23&_nc_ht=scontent.ftij1-3.fna&_nc_gid=2thteiqn9Dl85yh8I1_qKw&_nc_ss=7b2a8&oh=00_AQSF-EhPRy5GxAoVJSotGCqmCkhnpC2G3LHZzo-lXRcS8g&oe=6B050962', alt: 'Empanada de Fresa strawberry filling' },
      ]   },
  ]);
}
