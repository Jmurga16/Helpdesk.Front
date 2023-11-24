import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from "@angular/router";

import { FormControl } from '@angular/forms';
import { Menu } from 'src/app/shared/interfaces/Menu';
import { MenuService } from 'src/app/shared/services/menu.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

ListMenu: Menu[] = []
Username: string | null = ""
mobileQuery: MediaQueryList;
private _mobileQueryListener: () => void;

checkedDemo = new FormControl(true);

constructor(
  private router: Router,
  public ngZone: NgZone,
  changeDetectorRef: ChangeDetectorRef,
  media: MediaMatcher,  
  private menuService: MenuService
) {
  this.mobileQuery = media.matchMedia('(max-width: 600px)');
  this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  this.mobileQuery.addEventListener('change', this._mobileQueryListener);

  this.Username = localStorage.getItem("username")
}


//#region Limpiar cuando se destruya la instancia
ngOnDestroy(): void {
  this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
}
//#endregion


//#region Inicializar
ngOnInit(): void {

  this.fnListMenu()

}
//#endregion


//#region Listar Menu y SubMenus
async fnListMenu() {

  let nOpcion = 1
  let pParametro: any = [];

  await this.menuService.fnServiceMenu(nOpcion, pParametro).subscribe({
    next: (data: Menu[]) => {

      //let lengthLevel = data[data.length - 1].level

      //#region Menu Nivel 1
      data.forEach(element => {
        if (element.idParent == 0) {
          this.ListMenu.push(element)
        }
      });
      //#endregion

      //#region Menu Nivel 2
      this.ListMenu.forEach(element => {
        data.forEach(option => {
          if (element.idMenu == option.idParent && option.level == 2) {
            element.subMenu = []
            element.subMenu.push(option)
          }
        });
      });
      //#endregion

    },
    error: (e) => {
      console.error(e)
    }
  });


}
//#endregion


//#region Cerrar Sesión
fnLogout() {
  this.router.navigate(['/', 'login']);
}
//#endregion


//#region Ir a la Ruta
fnRouting(route: string) {
  let sRoute = `/${route}`
  this.router.navigateByUrl(sRoute);
}
//#endregion


//#region Mostrar SubMenu
fnShowSubMenu(index: number) {

  let statusShow: boolean;

  if (this.ListMenu[index].show) {
    statusShow = false;
  }
  else {
    statusShow = true;
  }

  this.ListMenu[index].show = statusShow
}

//#endregion


//#region Obtener Ruta Actual de Componente
get getRouterURL() {
  var routerURL = this.router.url.slice(1)

  return routerURL
}
//#endregion 

}
