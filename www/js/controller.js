angular.module('starter')
.controller('CalcController', function($scope){
	$scope.operacoes = ["+","-","*","/"];
	$scope.numero1 = null;
	$scope.numero2 = null;
	$scope.result = null;
	$scope.resultado = function(num1, num2, op){
		if(op == '+'){
			$scope.result =	num1 + num2;
		}else if (op == '-') {
			$scope.result =	num1 - num2;
		}else if (op == '*') {
			$scope.result =	num1 * num2;
		}else if (op == '/') {
			if(num2 == 0){
				$scope.result = "Não é possível dividir por zero"
			}else{
				$scope.result =	num1 / num2;
			}			
		}
	}
});