import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'createplaylist.component.html',
    styles: [ '::ng-deep .mat-dialog-container  {background-color : white}'
    ]
})
export class DialogOverviewExampleDialog {
    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }
    onNoClick(): void {
        this.dialogRef.close();
    }
}