programa
{
	
	funcao inicio()
	{
		inteiro valor
		escreva("Digite o valor que você deseja calcular o fatorial:")
		leia(valor)
		escreva("Fatorial: ", fatorial(valor))
		
	}

	funcao inteiro fatorial(inteiro x){
		se(x <= 1) {
			retorne 1
		} senao {
			retorne x * fatorial(x - 1)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 118; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */