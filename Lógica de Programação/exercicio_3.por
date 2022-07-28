programa
{
	
	funcao inicio()
	{
		real salario, financiamento

		escreva("Digite o salario:")
		faca {
			leia(salario)
		}enquanto(salario < 0)

		escreva("Digite o financiamento pretendido:")
		faca {
			leia(financiamento)
		}enquanto(financiamento < 0)

		se(financiamento <= 5 * salario)
			escreva("Financiamento Concedido")
		senao
			escreva("Financiamento Negado")
			
		escreva("\nObrigado por nos consultar.")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 186; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */