export interface PaperFormat {
    id?: number;
    name: string;
    widthOnHeightRatio: number;
    cmWidth: number;
    cmHeight: number;
}
export interface PrintOptions {
    id?: number;
    paperFormat: PaperFormat;
    canvaX: number;
    canvaY: number;
    canvaWidth: number;
    canvaHeight: number;
}
