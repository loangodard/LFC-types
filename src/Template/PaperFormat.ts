export interface PaperFormat {
    id?: number,
    name: string,
    widthOnHeightRatio: number,
    cmWidth: number,
    cmHeight: number,
}


export interface PrintOptions {
    id?: number;
    paperFormat: PaperFormat;
    canvaX: number; //percentage of paper width
    canvaY: number; //percentage of paper height
    canvaWidth: number; //percentage of paper width
    canvaHeight: number; //percentage of paper height
}