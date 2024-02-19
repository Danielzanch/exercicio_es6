"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
//• Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
var Aluno = /*#__PURE__*/_createClass(function Aluno(nomeDoAluno, notaDoAluno) {
  _classCallCheck(this, Aluno);
  this.nome = nomeDoAluno;
  this.nota = notaDoAluno;
});
;
var alunos = [new Aluno('João', 7), new Aluno('José', 8), new Aluno('mMrta', 5), new Aluno('Maria', 4)];
console.log(alunos);

//• Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

function alunosAprovados(alunos) {
  var Aprovados = [];
  alunos.map(function (aluno) {
    if (aluno.nota >= 6) {
      Aprovados.push(aluno);
    }
  });
  return Aprovados;
}
;
var Aprovados = alunosAprovados(alunos);
console.log(Aprovados);

//• Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o link através da plataforma.