//Grupperer alle "helper exports" sammen så de kan importeres i andre dele af appen ved kun at bruge "the folder path". Dvs. man kan importere flere "helpers" i et statement. Fx.import { helper1, helper2, ... } from '../_helpers' 
export * from './fake-backend';
export * from './router';
export * from './auth-header';