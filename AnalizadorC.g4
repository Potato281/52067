grammar AnalizadorC;

programa: declaraciones;

declaraciones:
    declaracion
    | declaraciones declaracion
    ;

declaracion: tipo IDENTIFICADOR '(' parametros ')' '{' cuerpo '}';

tipo:
    'int'
    | 'float'
    | 'char'
    ;

parametros:
    parametro
    | parametros ',' parametro
    ;

parametro:
    tipo IDENTIFICADOR
    ;

cuerpo:
    instruccion
    | cuerpo instruccion
    ;

instruccion:
    retorno
    ;

retorno:
    'return' expresion ';'
    ;

expresion:
    expresion '+' termino
    | expresion '-' termino
    | termino
    ;

termino:
    termino '*' factor
    | termino '/' factor
    | factor
    ;

factor:
    '(' expresion ')'
    | DIGITO
    | IDENTIFICADOR
    ;

IDENTIFICADOR:
    LETRA (LETRA | DIGITO)*
    ;

LETRA:
    'a'..'z'
    | 'A'..'Z'
    ;

DIGITO:
    '0'..'9'
    ;

WS: [ \t\r\n]+ -> skip ;