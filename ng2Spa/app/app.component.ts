import { Component } from '@angular/core';

@Component({
    selector: 'body',
    template: `
        <div class="wrapper">
            <header class="main-header" id="header"></header>

            <!-- /.sidebar -->
<<<<<<< HEAD
            <aside class="main-sidebar" id="main-sidebar"></aside>

=======
            <aside class="main-sidebar" id="sidebar"></aside>
            
            <!-- content -->
            <div class="content-wrapper"></div>
>>>>>>> 71954c65cc89914735b1437b58427683a0d658ce
            <!-- Control Sidebar -->
            <aside class="control-sidebar control-sidebar-dark"></aside>
            <!-- /.control-sidebar -->
            <!-- Add the sidebar's background. This div must be placed immediately after the control sidebar -->
            <div class="control-sidebar-bg"></div>
        <div>`
})


export class AppComponent {
    //another prop
    //typescript prop: type
    slogan: string = "Only men make men happy";
}
