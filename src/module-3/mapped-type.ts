type area = {
   width: string;
   height: string;
}
type volume = {
   [key in keyof area | "depth"]: number;
}