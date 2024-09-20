// Створіть змінну, яка може містити або рядок, або число (union type)?
// Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable'(literal type).

let mixedType: string | number;

mixedType = 'check'; // OK
mixedType = 10; // OK
mixedType = true; // Error

//=========================================

type EnableOrDisable = 'enable' | 'disable';

let value: EnableOrDisable;
value = 'enable'; // OK
value = 'disable'; // OK
value = 'something'; // Error

