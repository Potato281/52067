// Generated from c:/Users/Matias/ssl-antlr-analizador/AnalizadorC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AnalizadorCListener from './AnalizadorCListener.js';
import AnalizadorCVisitor from './AnalizadorCVisitor.js';

const serializedATN = [4,1,18,114,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,
1,1,1,1,1,1,1,1,1,5,1,32,8,1,10,1,12,1,35,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,54,8,4,10,4,12,4,57,9,4,1,
5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,5,6,67,8,6,10,6,12,6,70,9,6,1,7,1,7,1,8,1,
8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,87,8,9,10,9,12,9,90,9,
9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,101,8,10,10,10,12,10,
104,9,10,1,11,1,11,1,11,1,11,1,11,1,11,3,11,112,8,11,1,11,0,5,2,8,12,18,
20,12,0,2,4,6,8,10,12,14,16,18,20,22,0,1,1,0,5,7,110,0,24,1,0,0,0,2,26,1,
0,0,0,4,36,1,0,0,0,6,45,1,0,0,0,8,47,1,0,0,0,10,58,1,0,0,0,12,61,1,0,0,0,
14,71,1,0,0,0,16,73,1,0,0,0,18,77,1,0,0,0,20,91,1,0,0,0,22,111,1,0,0,0,24,
25,3,2,1,0,25,1,1,0,0,0,26,27,6,1,-1,0,27,28,3,4,2,0,28,33,1,0,0,0,29,30,
10,1,0,0,30,32,3,4,2,0,31,29,1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,
0,0,0,34,3,1,0,0,0,35,33,1,0,0,0,36,37,3,6,3,0,37,38,5,15,0,0,38,39,5,1,
0,0,39,40,3,8,4,0,40,41,5,2,0,0,41,42,5,3,0,0,42,43,3,12,6,0,43,44,5,4,0,
0,44,5,1,0,0,0,45,46,7,0,0,0,46,7,1,0,0,0,47,48,6,4,-1,0,48,49,3,10,5,0,
49,55,1,0,0,0,50,51,10,1,0,0,51,52,5,8,0,0,52,54,3,10,5,0,53,50,1,0,0,0,
54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,9,1,0,0,0,57,55,1,0,0,0,58,
59,3,6,3,0,59,60,5,15,0,0,60,11,1,0,0,0,61,62,6,6,-1,0,62,63,3,14,7,0,63,
68,1,0,0,0,64,65,10,1,0,0,65,67,3,14,7,0,66,64,1,0,0,0,67,70,1,0,0,0,68,
66,1,0,0,0,68,69,1,0,0,0,69,13,1,0,0,0,70,68,1,0,0,0,71,72,3,16,8,0,72,15,
1,0,0,0,73,74,5,9,0,0,74,75,3,18,9,0,75,76,5,10,0,0,76,17,1,0,0,0,77,78,
6,9,-1,0,78,79,3,20,10,0,79,88,1,0,0,0,80,81,10,3,0,0,81,82,5,11,0,0,82,
87,3,20,10,0,83,84,10,2,0,0,84,85,5,12,0,0,85,87,3,20,10,0,86,80,1,0,0,0,
86,83,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,19,1,0,0,0,90,
88,1,0,0,0,91,92,6,10,-1,0,92,93,3,22,11,0,93,102,1,0,0,0,94,95,10,3,0,0,
95,96,5,13,0,0,96,101,3,22,11,0,97,98,10,2,0,0,98,99,5,14,0,0,99,101,3,22,
11,0,100,94,1,0,0,0,100,97,1,0,0,0,101,104,1,0,0,0,102,100,1,0,0,0,102,103,
1,0,0,0,103,21,1,0,0,0,104,102,1,0,0,0,105,106,5,1,0,0,106,107,3,18,9,0,
107,108,5,2,0,0,108,112,1,0,0,0,109,112,5,17,0,0,110,112,5,15,0,0,111,105,
1,0,0,0,111,109,1,0,0,0,111,110,1,0,0,0,112,23,1,0,0,0,8,33,55,68,86,88,
100,102,111];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AnalizadorCParser extends antlr4.Parser {

    static grammarFileName = "AnalizadorC.g4";
    static literalNames = [ null, "'('", "')'", "'{'", "'}'", "'int'", "'float'", 
                            "'char'", "','", "'return'", "';'", "'+'", "'-'", 
                            "'*'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "IDENTIFICADOR", 
                             "LETRA", "DIGITO", "WS" ];
    static ruleNames = [ "programa", "declaraciones", "declaracion", "tipo", 
                         "parametros", "parametro", "cuerpo", "instruccion", 
                         "retorno", "expresion", "termino", "factor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AnalizadorCParser.ruleNames;
        this.literalNames = AnalizadorCParser.literalNames;
        this.symbolicNames = AnalizadorCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.declaraciones_sempred(localctx, predIndex);
    	case 4:
    	    		return this.parametros_sempred(localctx, predIndex);
    	case 6:
    	    		return this.cuerpo_sempred(localctx, predIndex);
    	case 9:
    	    		return this.expresion_sempred(localctx, predIndex);
    	case 10:
    	    		return this.termino_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    declaraciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    parametros_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    cuerpo_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    termino_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 5:
    			return this.precpred(this._ctx, 3);
    		case 6:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AnalizadorCParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.declaraciones(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	declaraciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new DeclaracionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, AnalizadorCParser.RULE_declaraciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.declaracion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new DeclaracionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, AnalizadorCParser.RULE_declaraciones);
	                this.state = 29;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 30;
	                this.declaracion(); 
	            }
	            this.state = 35;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AnalizadorCParser.RULE_declaracion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.tipo();
	        this.state = 37;
	        this.match(AnalizadorCParser.IDENTIFICADOR);
	        this.state = 38;
	        this.match(AnalizadorCParser.T__0);
	        this.state = 39;
	        this.parametros(0);
	        this.state = 40;
	        this.match(AnalizadorCParser.T__1);
	        this.state = 41;
	        this.match(AnalizadorCParser.T__2);
	        this.state = 42;
	        this.cuerpo(0);
	        this.state = 43;
	        this.match(AnalizadorCParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AnalizadorCParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 224) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	parametros(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ParametrosContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, AnalizadorCParser.RULE_parametros, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.parametro();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 55;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ParametrosContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, AnalizadorCParser.RULE_parametros);
	                this.state = 50;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 51;
	                this.match(AnalizadorCParser.T__7);
	                this.state = 52;
	                this.parametro(); 
	            }
	            this.state = 57;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	parametro() {
	    let localctx = new ParametroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AnalizadorCParser.RULE_parametro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.tipo();
	        this.state = 59;
	        this.match(AnalizadorCParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	cuerpo(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CuerpoContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, AnalizadorCParser.RULE_cuerpo, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 68;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CuerpoContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, AnalizadorCParser.RULE_cuerpo);
	                this.state = 64;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 65;
	                this.instruccion(); 
	            }
	            this.state = 70;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AnalizadorCParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.retorno();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, AnalizadorCParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(AnalizadorCParser.T__8);
	        this.state = 74;
	        this.expresion(0);
	        this.state = 75;
	        this.match(AnalizadorCParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, AnalizadorCParser.RULE_expresion, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.termino(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 88;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 86;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpresionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, AnalizadorCParser.RULE_expresion);
	                    this.state = 80;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 81;
	                    this.match(AnalizadorCParser.T__10);
	                    this.state = 82;
	                    this.termino(0);
	                    break;

	                case 2:
	                    localctx = new ExpresionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, AnalizadorCParser.RULE_expresion);
	                    this.state = 83;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 84;
	                    this.match(AnalizadorCParser.T__11);
	                    this.state = 85;
	                    this.termino(0);
	                    break;

	                } 
	            }
	            this.state = 90;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	termino(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TerminoContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, AnalizadorCParser.RULE_termino, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.factor();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 102;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 100;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TerminoContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, AnalizadorCParser.RULE_termino);
	                    this.state = 94;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 95;
	                    this.match(AnalizadorCParser.T__12);
	                    this.state = 96;
	                    this.factor();
	                    break;

	                case 2:
	                    localctx = new TerminoContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, AnalizadorCParser.RULE_termino);
	                    this.state = 97;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 98;
	                    this.match(AnalizadorCParser.T__13);
	                    this.state = 99;
	                    this.factor();
	                    break;

	                } 
	            }
	            this.state = 104;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, AnalizadorCParser.RULE_factor);
	    try {
	        this.state = 111;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            this.match(AnalizadorCParser.T__0);
	            this.state = 106;
	            this.expresion(0);
	            this.state = 107;
	            this.match(AnalizadorCParser.T__1);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 109;
	            this.match(AnalizadorCParser.DIGITO);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 110;
	            this.match(AnalizadorCParser.IDENTIFICADOR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AnalizadorCParser.EOF = antlr4.Token.EOF;
AnalizadorCParser.T__0 = 1;
AnalizadorCParser.T__1 = 2;
AnalizadorCParser.T__2 = 3;
AnalizadorCParser.T__3 = 4;
AnalizadorCParser.T__4 = 5;
AnalizadorCParser.T__5 = 6;
AnalizadorCParser.T__6 = 7;
AnalizadorCParser.T__7 = 8;
AnalizadorCParser.T__8 = 9;
AnalizadorCParser.T__9 = 10;
AnalizadorCParser.T__10 = 11;
AnalizadorCParser.T__11 = 12;
AnalizadorCParser.T__12 = 13;
AnalizadorCParser.T__13 = 14;
AnalizadorCParser.IDENTIFICADOR = 15;
AnalizadorCParser.LETRA = 16;
AnalizadorCParser.DIGITO = 17;
AnalizadorCParser.WS = 18;

AnalizadorCParser.RULE_programa = 0;
AnalizadorCParser.RULE_declaraciones = 1;
AnalizadorCParser.RULE_declaracion = 2;
AnalizadorCParser.RULE_tipo = 3;
AnalizadorCParser.RULE_parametros = 4;
AnalizadorCParser.RULE_parametro = 5;
AnalizadorCParser.RULE_cuerpo = 6;
AnalizadorCParser.RULE_instruccion = 7;
AnalizadorCParser.RULE_retorno = 8;
AnalizadorCParser.RULE_expresion = 9;
AnalizadorCParser.RULE_termino = 10;
AnalizadorCParser.RULE_factor = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorCParser.RULE_programa;
    }

	declaraciones() {
	    return this.getTypedRuleContext(DeclaracionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorCVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorCParser.RULE_declaraciones;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	declaraciones() {
	    return this.getTypedRuleContext(DeclaracionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.enterDeclaraciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.exitDeclaraciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorCVisitor ) {
	        return visitor.visitDeclaraciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorCParser.RULE_declaracion;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	IDENTIFICADOR() {
	    return this.getToken(AnalizadorCParser.IDENTIFICADOR, 0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorCVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorCParser.RULE_tipo;
    }


	enterRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.exitTipo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorCVisitor ) {
	        return visitor.visitTipo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorCParser.RULE_parametros;
    }

	parametro() {
	    return this.getTypedRuleContext(ParametroContext,0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorCVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorCParser.RULE_parametro;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	IDENTIFICADOR() {
	    return this.getToken(AnalizadorCParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.enterParametro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.exitParametro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorCVisitor ) {
	        return visitor.visitParametro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CuerpoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorCParser.RULE_cuerpo;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.enterCuerpo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.exitCuerpo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorCVisitor ) {
	        return visitor.visitCuerpo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorCParser.RULE_instruccion;
    }

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorCVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorCParser.RULE_retorno;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorCVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorCParser.RULE_expresion;
    }

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorCVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorCParser.RULE_termino;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorCVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorCParser.RULE_factor;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	DIGITO() {
	    return this.getToken(AnalizadorCParser.DIGITO, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(AnalizadorCParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorCListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorCVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




AnalizadorCParser.ProgramaContext = ProgramaContext; 
AnalizadorCParser.DeclaracionesContext = DeclaracionesContext; 
AnalizadorCParser.DeclaracionContext = DeclaracionContext; 
AnalizadorCParser.TipoContext = TipoContext; 
AnalizadorCParser.ParametrosContext = ParametrosContext; 
AnalizadorCParser.ParametroContext = ParametroContext; 
AnalizadorCParser.CuerpoContext = CuerpoContext; 
AnalizadorCParser.InstruccionContext = InstruccionContext; 
AnalizadorCParser.RetornoContext = RetornoContext; 
AnalizadorCParser.ExpresionContext = ExpresionContext; 
AnalizadorCParser.TerminoContext = TerminoContext; 
AnalizadorCParser.FactorContext = FactorContext; 
