import { Component, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


declare let swal: any;

@Component({
    selector: 'sss-modal-container',
    template: ''
})


export class ModalComponent implements OnInit, OnDestroy {
    constructor(
        private modalService: BsModalService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    /** variable */
    dialog = null;
    modalRef: BsModalRef;
    destroy = new Subject<any>();

    ngOnInit() {
        try {
            this.route.params.pipe(takeUntil(this.destroy)).subscribe(params => {
                const fullPath = this.router.url;
                const parentPath = fullPath.split('/')[1];
                const childPath = fullPath.split('/')[2];

                /** When router navigates on this component is takes the params and opens up the photo detail modal */
                const initialState = { params: params };
                switch (parentPath) {
                    // case 'khach-hang':
                    //     if (childPath === 'them-moi') {
                    //         this.modalRef = this.modalService.show(
                    //             CustomerCreateComponent,
                    //             { class: 'modal-xl', initialState }
                    //         );
                    //     }
                    //     break;
                    default:
                        this.router.navigateByUrl('/not-found');
                        break;
                }

                // Go back to home page after the modal is closed
                this.modalService.onHide.subscribe(() => {
                    this.router.navigate([`/${parentPath}/`], { queryParams: { refresh: true } });
                });
            });
        } catch (ex) {
            /*begin:: write log ex here: break*/
            throw new Error(ex);
        }

    }

    ngOnDestroy() { this.destroy.next(); }
}
