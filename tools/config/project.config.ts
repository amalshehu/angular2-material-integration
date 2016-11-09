import { join } from 'path';

import { SeedConfig } from './seed.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    //this.APP_TITLE = 'Put name of your app here';
    this.SYSTEM_CONFIG_DEV.paths['md2'] =
      `${this.APP_BASE}node_modules/md2/md2.umd.js`;


    this.SYSTEM_BUILDER_CONFIG.packages['md2'] = {
        main: 'index.js',
        defaultExtension: 'js'
    };

    this.SYSTEM_BUILDER_CONFIG.packageConfigPaths.push(
      join('node_modules', 'md2', '*', 'package.json')
    );

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      /* Select a pre-built Material theme */
     {src: '@angular/material/core/theming/prebuilt/deeppurple-amber.css', inject: true},
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
    // add Material configuration to SystemJS.
   this.addPackageBundles({
     name:'@angular/material',
     path:'node_modules/@angular/material/material.umd.js',
     packageMeta:{
       main: 'index.js',
       defaultExtension: 'js'
     }
   });

   // add Md2 configuration to SystemJS.
  // this.addPackageBundles({
  //   name:'md2',
  //   path:'node_modules/md2/md2.umd.js',
  //   packageMeta:{
  //     main: 'index.js',
  //     defaultExtension: 'global'
  //   }
  // });

  }

}
