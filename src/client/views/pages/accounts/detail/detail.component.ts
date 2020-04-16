import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/client/services';
import { User } from 'src/client/models';
import { UploadService } from 'src/client/services/upload.service';

/** private variable */
declare let swal: any;

@Component({
    selector: '.vqn-container .vqn-body .vqn-grid .vqn-grid--ver',
    templateUrl: './detail.component.html',
    providers: [
        AccountService,
        UploadService
    ]
})
export class DetailAccountComponent implements OnInit {
    model: any = {};
    loading = false;
    invalid = true;

    constructor(
        private accountService: AccountService,
        private uploadService: UploadService,
    ) { }

    async ngOnInit() {
        try {
            /** load data from service */
            const respone = await this.accountService.profile();
            if (respone.code) return swal.fire('Hệ Thống', respone.message, 'warning');
            this.model = respone.user as User[];
            this.model.start_date = new Date(this.model.start_date * 1000);
            if (this.model.birthday) {
                this.model.birthday = new Date(this.model.birthday * 1000);
            }
            return this.model;
        } catch (ex) {
            /*begin:: write log ex here: break*/
            throw new Error(ex);
        }
    }


    onUploadAvatar = ($event) => {
        if ($event) {
            const input = $event.target;
            const formData = new FormData();
            formData.append('file', input.files[0]);
            this.uploadService.uploadSingle(
                formData,
                'users'
            ).then(respone => {
                if (respone.code) {
                    swal.fire('Hệ Thống', respone.message, 'warning');
                }
                this.model.avatar = respone.url;
                console.log(this.model.avatar);
                return this.model;
            }).catch(ex => {
                /*begin:: write log ex here: break*/
                throw new Error(ex);
            });
        }
    }

    updateProfile = (f) => {
        this.invalid = f.valid;
        if (this.invalid) {
            swal.fire({
                title: 'Cập Nhật Thông Tin',
                type: 'warning',
                text: 'Bạn chắc chắn rằng mình muốn cập nhật thông tin của mình không?',
                showCancelButton: true,
                confirmButtonText: 'Đồng ý!',
                cancelButtonText: 'Từ bỏ!'
            }).then(async result => {
                try {
                    if (result.value) {
                        this.loading = true;
                        const respone = await this.accountService.update(this.model);
                        if (respone.code) {
                            return swal.fire('Hệ Thống', respone.message, 'warning');
                        }
                        return swal.fire('Thành Công', 'Cập nhật thông tin thành công!', 'success');
                    }
                } catch (ex) {
                    /*begin:: write log ex here: break*/
                    throw new Error(ex);
                } finally {
                    this.loading = false;
                }
            });
        }
    }

}
