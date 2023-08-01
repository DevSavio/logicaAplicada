import { Component, Inject } from '@angular/core';
import {
  NB_WINDOW,
  NbMenuItem,
  NbMenuService,
  NbSidebarService,
} from '@nebular/theme';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lista de Exercícios Lógica';

  items: NbMenuItem[] = [
    {
      title: 'Lógica',
      icon: 'book-open-outline',
      children: [
        {
          title: 'Exercício 1',
          link: 'exercicio1',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 2',
          link: 'exercicio2',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 3',
          link: 'exercicio3',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 4',
          link: 'exercicio4',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 5',
          link: 'exercicio5',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 6',
          link: 'exercicio6',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 7',
          link: 'exercicio7',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 8',
          link: 'exercicio8',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 9',
          // link: 'fornecedor/list',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 10',
          // link: 'unidade_medida/list',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 11',
          // link: 'local_estoque/list',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 12',
          // link: 'produto/list',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 13',
          // link: 'ponto_venda/list',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 14',
          // link: 'familia_produto/list',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 15',
          // link: 'pessoa/list',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 16',
          // link: 'categoria/list',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 17',
          // link: 'fornecedor/list',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 18',
          // link: 'unidade_medida/list',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 19',
          // link: 'fornecedor/list',
          icon: 'hash-outline',
        },
        {
          title: 'Exercício 20',
          // link: 'unidade_medida/list',
          icon: 'hash-outline',
        },
      ],
    },
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private nbMenuService: NbMenuService,
    @Inject(NB_WINDOW) private window: any
  ) {}

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  ngOnInit() {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title)
      )
      .subscribe((title: any) => this.window.alert(`${title} was clicked!`));
  }
}
