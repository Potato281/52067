import AnalizadorCVisitor from './generated/AnalizadorCVisitor.js';

export class CustomAnalizadorCVisitor extends AnalizadorCVisitor {

    visitPrograma(ctx) {
        let codigoJS = this.visit(ctx.declaraciones());
        
        console.log("--- CÓDIGO TRADUCIDO A JAVASCRIPT ---");
        console.log(codigoJS);
        console.log("-------------------------------------\n");
        
        console.log("--- EJECUCIÓN (INTÉRPRETE) ---");
        try {
            if (codigoJS.includes("function main")) {
                let codigoAEjecutar = codigoJS + "\nmain(5, 10);";
                let resultado = eval(codigoAEjecutar);
                console.log("✅ Funciones declaradas en memoria correctamente.");
                console.log(`✅ Resultado de ejecutar main(5, 10): ${resultado}`);
            } else {
                eval(codigoJS);
                console.log("✅ Funciones declaradas en memoria correctamente.");
            }
        } catch (error) {
            console.error("❌ Error en la ejecución:", error);
        }
        return codigoJS;
    }

    visitDeclaraciones(ctx) {
        if (ctx.declaraciones()) {
            return this.visit(ctx.declaraciones()) + "\n\n" + this.visit(ctx.declaracion());
        }
        return this.visit(ctx.declaracion());
    }

    visitDeclaracion(ctx) {
        let nombreFuncion = ctx.IDENTIFICADOR().getText();
        let parametros = this.visit(ctx.parametros());
        let cuerpo = this.visit(ctx.cuerpo());
        
        return `function ${nombreFuncion}(${parametros}) {\n    ${cuerpo}\n}`;
    }

    visitParametros(ctx) {
        if (ctx.parametros()) {
            return this.visit(ctx.parametros()) + ", " + this.visit(ctx.parametro());
        }
        return this.visit(ctx.parametro());
    }

    visitParametro(ctx) {
        return ctx.IDENTIFICADOR().getText();
    }

    visitCuerpo(ctx) {
        if (ctx.cuerpo()) {
            return this.visit(ctx.cuerpo()) + "\n    " + this.visit(ctx.instruccion());
        }
        return this.visit(ctx.instruccion());
    }

    visitInstruccion(ctx) {
        return this.visit(ctx.retorno());
    }

    visitRetorno(ctx) {
        return `return ${this.visit(ctx.expresion())};`;
    }

    visitExpresion(ctx) {
        if (ctx.getChildCount() === 3) {
            let izq = this.visit(ctx.getChild(0));
            let operador = ctx.getChild(1).getText();
            let der = this.visit(ctx.getChild(2));
            return `${izq} ${operador} ${der}`;
        }
        return this.visit(ctx.getChild(0));
    }

    visitTermino(ctx) {
        if (ctx.getChildCount() === 3) {
            let izq = this.visit(ctx.getChild(0));
            let operador = ctx.getChild(1).getText();
            let der = this.visit(ctx.getChild(2));
            return `${izq} ${operador} ${der}`;
        }
        return this.visit(ctx.getChild(0));
    }

    visitFactor(ctx) {
        if (ctx.getChildCount() === 3) { 
            return `(${this.visit(ctx.expresion())})`;
        }
        return ctx.getText();
    }
}