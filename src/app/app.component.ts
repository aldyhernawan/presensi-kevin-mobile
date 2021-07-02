import { Util } from './util';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  tables: any = ['presensi', 'karyawan', 'divisi', 'cuti'];
  constructor(
    public util: Util,
    public plt: Platform
  ) {
    this.util.cekLogin();
    // this.backgroundMode.
  }

  ngOnInit() {
    this.plt.ready().then(async (res) => {});
  }
}
