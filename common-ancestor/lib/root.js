/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import Tree from './commonAncestor';
import { covers } from './commonAncestor';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

let root = new Tree(6);
let branch1 = root.insertLeft(3);
let branch2 = root.insertRight(9);
let branch3 = branch1.insertLeft(2);
let branch4 = branch1.insertRight(5);
let branch5 = branch2.insertLeft(8);
let branch6 = branch2.insertRight(10);
let branch7 = branch3.insertLeft(1);
let branch8 = branch4.insertLeft(4);
let branch9 = branch5.insertLeft(7);
let branch10 = branch6.insertLeft(11);
let branch11 = new Tree(12);

window.root = root;
window.branch1 = branch1;
window.branch2 = branch2;
window.branch3 = branch3;
window.branch4 = branch4;
window.branch5 = branch5;
window.branch6 = branch6;
window.branch7 = branch7;
window.branch8 = branch8;
window.branch9 = branch9;
window.branch10 = branch10;
window.branch11 = branch11;
window.Tree = Tree;
window.covers = covers;