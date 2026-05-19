import AnalizadorCLexer from "./generated/AnalizadorCLexer.js";
import AnalizadorCParser from "./generated/AnalizadorCParser.js";
import { CustomAnalizadorCVisitor } from "./CustomAnalizadorCVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new AnalizadorCLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    
tokenStream.fill();
    console.log("--- TABLA DE LEXEMAS - TOKENS ---");
    console.log("LEXEMA\t\t|\tTOKEN");
    console.log("---------------------------------");
    
    for (let token of tokenStream.tokens) {
        if (token.type !== antlr4.Token.EOF) {
            let tokenName = AnalizadorCLexer.symbolicNames[token.type] || AnalizadorCLexer.literalNames[token.type] || `TOKEN_${token.type}`;
            let lexeme = token.text;
            console.log(`${lexeme}\t\t|\t${tokenName}`);
        }
    }
    console.log("---------------------------------\n");

    let parser = new AnalizadorCParser(tokenStream);
    let tree = parser.programa();
    
    if (parser.syntaxErrorsCount > 0) {
        console.error("Se encontraron errores de sintaxis en la entrada.");
    } 
    else {
        console.log("Entrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación:\n${cadena_tree}\n`);

        const visitor = new CustomAnalizadorCVisitor();
        visitor.visit(tree);   
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();